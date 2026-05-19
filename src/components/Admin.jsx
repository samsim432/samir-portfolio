import { useEffect, useMemo, useState } from "react";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";

import { auth, db } from "../firebase";
import "./Admin.css";

const categories = [
  "AI",
  "Robot",
  "Space",
  "Math",
  "Science",
  "Future",
  "Physics",
  "Theory",
];

function Admin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [user, setUser] = useState(null);

  const [editingId, setEditingId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");

  const [publishedArticles, setPublishedArticles] = useState([]);
  const [products, setProducts] = useState([]);

  const [isPublishing, setIsPublishing] = useState(false);
  const [isPublishingProduct, setIsPublishingProduct] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    category: "AI",
    author: "",
    shortDescription: "",
    fullDetails: "",
    image: "",
  });

  const [productForm, setProductForm] = useState({
    title: "",
    price: "",
    description: "",
    image: "",
    buyLink: "",
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const articlesQuery = query(
      collection(db, "articles"),
      orderBy("publishedAt", "desc")
    );

    const unsubscribe = onSnapshot(articlesQuery, (snapshot) => {
      const firebaseArticles = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setPublishedArticles(firebaseArticles);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const productsQuery = query(
      collection(db, "products"),
      orderBy("publishedAt", "desc")
    );

    const unsubscribe = onSnapshot(productsQuery, (snapshot) => {
      const firebaseProducts = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setProducts(firebaseProducts);
    });

    return () => unsubscribe();
  }, []);

  const filteredArticles = useMemo(() => {
    return publishedArticles.filter((article) => {
      const title = article.title || "";
      const text = article.text || "";
      const author = article.author || "";

      const matchesSearch =
        title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        text.toLowerCase().includes(searchTerm.toLowerCase()) ||
        author.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        filterCategory === "All" || article.category === filterCategory;

      return matchesSearch && matchesCategory;
    });
  }, [publishedArticles, searchTerm, filterCategory]);

  const totalArticles = publishedArticles.length;
  const totalProducts = products.length;
  const totalCategories = new Set(publishedArticles.map((a) => a.category)).size;
  const latestArticle = publishedArticles[0];

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      setUser(userCredential.user);
    } catch (error) {
      alert("Login failed: " + error.message);
    }
  }

  async function handleLogout() {
    await signOut(auth);
    setUser(null);
    setEmail("");
    setPassword("");
    resetArticleForm();
    resetProductForm();
  }

  function handleArticleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleProductChange(e) {
    const { name, value } = e.target;

    setProductForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function resetArticleForm() {
    setFormData({
      title: "",
      category: "AI",
      author: "",
      shortDescription: "",
      fullDetails: "",
      image: "",
    });

    setEditingId(null);
  }

  function resetProductForm() {
    setProductForm({
      title: "",
      price: "",
      description: "",
      image: "",
      buyLink: "",
    });
  }

  function handleEditArticle(article) {
    setEditingId(article.id);

    setFormData({
      title: article.title || "",
      category: article.category || "AI",
      author: article.author || "",
      shortDescription: article.text || "",
      fullDetails: Array.isArray(article.content)
        ? article.content.join("\n")
        : "",
      image: article.image || "",
    });

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function handleDeleteArticle(id) {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this article?"
    );

    if (!confirmDelete) return;

    try {
      await deleteDoc(doc(db, "articles", id));
      alert("Article deleted successfully.");
    } catch (error) {
      alert("Delete failed: " + error.message);
    }
  }

  async function handleDeleteProduct(id) {
    const confirmDelete = window.confirm("Are you sure you want to delete this product?");

    if (!confirmDelete) return;

    try {
      await deleteDoc(doc(db, "products", id));
      alert("Product deleted successfully.");
    } catch (error) {
      alert("Delete failed: " + error.message);
    }
  }

  async function handlePublishArticle(e) {
    e.preventDefault();

    if (!formData.image) {
      alert("Please paste an article image URL.");
      return;
    }

    setIsPublishing(true);

// inside handlePublishArticle

try {
  const slug = formData.title
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");

  const newArticle = {
    slug,
    title: formData.title,
    category: formData.category,
    tag: formData.category,
    author: formData.author,
    text: formData.shortDescription,
    content: formData.fullDetails
      .split("\n")
      .filter((paragraph) => paragraph.trim() !== ""),
    image: formData.image,
    publishedAt: serverTimestamp(),
    updatedAt: null,
  };

      if (editingId) {
        const oldArticle = publishedArticles.find(
          (article) => article.id === editingId
        );

        await updateDoc(doc(db, "articles", editingId), {
          ...newArticle,
          publishedAt: oldArticle?.publishedAt || serverTimestamp(),
          updatedAt: serverTimestamp(),
        });

        setEditingId(null);
      } else {
        await addDoc(collection(db, "articles"), newArticle);
      }

      resetArticleForm();

      alert(
        editingId
          ? "Article updated successfully."
          : "Article published successfully."
      );
    } catch (error) {
      alert("Publish failed: " + error.message);
    } finally {
      setIsPublishing(false);
    }
  }

  async function handlePublishProduct(e) {
    e.preventDefault();

    if (!productForm.image) {
      alert("Please paste a product image URL.");
      return;
    }

    if (!productForm.buyLink) {
      alert("Please paste your PDF/buy/download link.");
      return;
    }

    setIsPublishingProduct(true);

    try {
      await addDoc(collection(db, "products"), {
        title: productForm.title,
        price: productForm.price,
        description: productForm.description,
        image: productForm.image,
        buyLink: productForm.buyLink,
        publishedAt: serverTimestamp(),
      });

      resetProductForm();

      alert("Product published successfully.");
    } catch (error) {
      alert("Product publish failed: " + error.message);
    } finally {
      setIsPublishingProduct(false);
    }
  }

  if (!user) {
    return (
      <section className="admin-login-page">
        <form onSubmit={handleLogin} className="admin-login-card">
          <div className="admin-login-icon">🔐</div>

          <h1>Admin Login</h1>

          <p>Enter your Firebase admin email and password.</p>

          <input
            type="email"
            placeholder="Admin email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Admin password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Login</button>
        </form>
      </section>
    );
  }

  return (
    <section className="admin-page">
      <aside className="admin-sidebar">
        <div>
          <h2>Admin</h2>
          <p>Dashboard</p>
        </div>

        <nav>
          <a href="#overview">Overview</a>
          <a href="#editor">Create Article</a>
          <a href="#manage">Manage Articles</a>
          <a href="#products">Digital Products</a>
        </nav>

        <button onClick={handleLogout} className="admin-sidebar-logout">
          Logout
        </button>
      </aside>

      <main className="admin-main">
        <header className="admin-header">
          <div>
            <p className="admin-eyebrow">Welcome back</p>
            <h1>Professional Admin Dashboard</h1>
            <p className="admin-subtitle">
              Create articles, manage products, and upload PDF product links.
            </p>
          </div>

          <div className="admin-header-actions">
            <button onClick={resetArticleForm} className="admin-light-btn">
              Clear Article
            </button>

            <button onClick={resetProductForm} className="admin-light-btn">
              Clear Product
            </button>

            <button onClick={handleLogout} className="admin-danger-btn">
              Logout
            </button>
          </div>
        </header>

        <section id="overview" className="admin-stats-grid">
          <div className="admin-stat-card">
            <p>Total Articles</p>
            <h2>{totalArticles}</h2>
          </div>

          <div className="admin-stat-card">
            <p>Total Products</p>
            <h2>{totalProducts}</h2>
          </div>

          <div className="admin-stat-card">
            <p>Categories Used</p>
            <h2>{totalCategories}</h2>
          </div>

          <div className="admin-stat-card admin-wide-stat">
            <p>Latest Article</p>
            <h3>{latestArticle ? latestArticle.title : "No articles yet"}</h3>
          </div>
        </section>

        <section id="editor" className="admin-panel">
          <div className="admin-panel-header">
            <div>
              <h2>{editingId ? "Edit Article" : "Create New Article"}</h2>
              <p>Write and publish articles from desktop or mobile.</p>
            </div>

            {editingId && <span className="admin-editing-badge">Editing</span>}
          </div>

          <form onSubmit={handlePublishArticle} className="admin-form">
            <div className="admin-two-column">
              <div>
                <label>Article Title</label>
                <input
                  type="text"
                  name="title"
                  placeholder="Enter article title"
                  value={formData.title}
                  onChange={handleArticleChange}
                  required
                />
              </div>

              <div>
                <label>Category</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleArticleChange}
                  required
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <label>Written By</label>
            <input
              type="text"
              name="author"
              placeholder="Author name"
              value={formData.author}
              onChange={handleArticleChange}
              required
            />

            <label>Article Image URL</label>
            <input
              type="text"
              name="image"
              placeholder="Paste image URL here"
              value={formData.image}
              onChange={handleArticleChange}
              required
            />

            {formData.image && (
              <img
                src={formData.image}
                alt="Article preview"
                className="admin-preview-image"
              />
            )}

            <label>Short Description</label>
            <textarea
              name="shortDescription"
              placeholder="Short article summary"
              value={formData.shortDescription}
              onChange={handleArticleChange}
              required
              rows="3"
            />

            <label>Full Article Details</label>
            <textarea
              name="fullDetails"
              placeholder="Write full article details. Use new lines for separate paragraphs."
              value={formData.fullDetails}
              onChange={handleArticleChange}
              required
              rows="10"
            />

            <button
              type="submit"
              disabled={isPublishing}
              className="admin-primary-btn"
            >
              {isPublishing
                ? "Publishing..."
                : editingId
                ? "Update Article"
                : "Publish Article"}
            </button>
          </form>
        </section>

        <section id="manage" className="admin-panel">
          <div className="admin-panel-header">
            <div>
              <h2>Manage Articles</h2>
              <p>Search, edit, or delete published articles.</p>
            </div>
          </div>

          <div className="admin-toolbar">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
            >
              <option value="All">All Categories</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {filteredArticles.length === 0 ? (
            <div className="admin-empty-state">
              <h3>No articles found</h3>
              <p>Create a new article or change your search filters.</p>
            </div>
          ) : (
            <div className="admin-list">
              {filteredArticles.map((article) => (
                <article key={article.id} className="admin-list-card">
                  {article.image && (
                    <img src={article.image} alt={article.title} />
                  )}

                  <div className="admin-list-content">
                    <div className="admin-list-top">
                      <span>{article.category}</span>
                      <small>{article.updatedAt ? "Updated" : "Published"}</small>
                    </div>

                    <h3>{article.title}</h3>
                    <p>{article.text}</p>
                    <strong>By {article.author}</strong>

                    <div className="admin-button-row">
                      <button
                        onClick={() => handleEditArticle(article)}
                        className="admin-edit-btn"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() => handleDeleteArticle(article.id)}
                        className="admin-delete-btn"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        <section id="products" className="admin-panel">
          <div className="admin-panel-header">
            <div>
              <h2>Digital Products</h2>
              <p>
                Add PDFs, guides, eBooks, and paid/downloadable product links.
              </p>
            </div>
          </div>

          <form onSubmit={handlePublishProduct} className="admin-form">
            <label>Product Title</label>
            <input
              type="text"
              name="title"
              placeholder="Example: AI Guide PDF"
              value={productForm.title}
              onChange={handleProductChange}
              required
            />

            <div className="admin-two-column">
              <div>
                <label>Price</label>
                <input
                  type="text"
                  name="price"
                  placeholder="£4.99 or Free"
                  value={productForm.price}
                  onChange={handleProductChange}
                  required
                />
              </div>

              <div>
                <label>Product Image URL</label>
                <input
                  type="text"
                  name="image"
                  placeholder="Paste image URL"
                  value={productForm.image}
                  onChange={handleProductChange}
                  required
                />
              </div>
            </div>

            <label>Product Description</label>
            <textarea
              name="description"
              placeholder="Write short product description"
              value={productForm.description}
              onChange={handleProductChange}
              required
              rows="4"
            />

            <label>PDF / Buy / Download Link</label>
            <input
              type="text"
              name="buyLink"
              placeholder="Google Drive, Gumroad, Payhip, Ko-fi, Buy Me a Coffee link"
              value={productForm.buyLink}
              onChange={handleProductChange}
              required
            />

            {productForm.image && (
              <img
                src={productForm.image}
                alt="Product preview"
                className="admin-preview-image"
              />
            )}

            <button
              type="submit"
              disabled={isPublishingProduct}
              className="admin-primary-btn"
            >
              {isPublishingProduct ? "Publishing..." : "Publish Product"}
            </button>
          </form>

          <div className="admin-product-manage">
            <h2>Manage Products</h2>

            {products.length === 0 ? (
              <div className="admin-empty-state">
                <h3>No products yet</h3>
                <p>Add your first PDF or digital product above.</p>
              </div>
            ) : (
              <div className="admin-list">
                {products.map((product) => (
                  <article key={product.id} className="admin-list-card">
                    {product.image && (
                      <img src={product.image} alt={product.title} />
                    )}

                    <div className="admin-list-content">
                      <div className="admin-list-top">
                        <span>{product.price}</span>
                        <small>Product</small>
                      </div>

                      <h3>{product.title}</h3>
                      <p>{product.description}</p>

                      <div className="admin-button-row">
                        <a
                          href={product.buyLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="admin-edit-btn"
                        >
                          Open Link
                        </a>

                        <button
                          onClick={() => handleDeleteProduct(product.id)}
                          className="admin-delete-btn"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
    </section>
  );
}

export default Admin;