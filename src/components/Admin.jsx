import { useEffect, useMemo, useState } from "react";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase";
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
import { db } from "../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../firebase";

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
  const [imageFile, setImageFile] = useState(null);
  const [isPublishing, setIsPublishing] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    category: "AI",
    author: "",
    shortDescription: "",
    fullDetails: "",
    image: "",
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

  const filteredArticles = useMemo(() => {
    return publishedArticles.filter((article) => {
      const matchesSearch =
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.text.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.author.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        filterCategory === "All" || article.category === filterCategory;

      return matchesSearch && matchesCategory;
    });
  }, [publishedArticles, searchTerm, filterCategory]);

  const totalArticles = publishedArticles.length;
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
    resetForm();
  }

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleImageChange(e) {
    const file = e.target.files[0];

    if (!file) return;

    setImageFile(file);

    const imagePreviewUrl = URL.createObjectURL(file);

    setFormData((prev) => ({
      ...prev,
      image: imagePreviewUrl,
    }));
  }

  function resetForm() {
    setFormData({
      title: "",
      category: "AI",
      author: "",
      shortDescription: "",
      fullDetails: "",
      image: "",
    });

    setImageFile(null);
    setEditingId(null);
  }

  function handleEditArticle(article) {
    setEditingId(article.id);

    setFormData({
      title: article.title,
      category: article.category,
      author: article.author,
      shortDescription: article.text,
      fullDetails: article.content.join("\n"),
      image: article.image,
    });

    setImageFile(null);

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

  async function handlePublish(e) {
    e.preventDefault();

    if (!formData.image) {
      alert("Please choose an article image.");
      return;
    }

    setIsPublishing(true);

    try {
      let imageUrl = formData.image;

      if (imageFile) {
        const imageRef = ref(
          storage,
          `article-images/${Date.now()}-${imageFile.name}`
        );

        await uploadBytes(imageRef, imageFile);

        imageUrl = await getDownloadURL(imageRef);
      }

      const newArticle = {
        title: formData.title,
        category: formData.category,
        tag: formData.category,
        author: formData.author,
        text: formData.shortDescription,
        content: formData.fullDetails
          .split("\n")
          .filter((paragraph) => paragraph.trim() !== ""),
        image: imageUrl,
        publishedAt: serverTimestamp(),
        updatedAt: null,
      };

      if (editingId) {
        await updateDoc(doc(db, "articles", editingId), {
          ...newArticle,
          publishedAt: publishedArticles.find(
            (article) => article.id === editingId
          )?.publishedAt,
          updatedAt: serverTimestamp(),
        });

        setEditingId(null);
      } else {
        await addDoc(collection(db, "articles"), newArticle);
      }

      setFormData({
        title: "",
        category: "AI",
        author: "",
        shortDescription: "",
        fullDetails: "",
        image: "",
      });

      setImageFile(null);

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

  if (!user) {
    return (
      <section style={loginPageStyle}>
        <form onSubmit={handleLogin} style={loginCardStyle}>
          <div style={loginIconStyle}>🔐</div>

          <h1 style={loginTitleStyle}>Admin Login</h1>

          <p style={loginTextStyle}>
            Enter your Firebase admin email and password.
          </p>

          <input
            type="email"
            placeholder="Admin email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={inputStyle}
          />

          <input
            type="password"
            placeholder="Admin password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={inputStyle}
          />

          <button type="submit" style={primaryButtonStyle}>
            Login
          </button>
        </form>
      </section>
    );
  }

  return (
    <section style={pageStyle}>
      <aside style={sidebarStyle}>
        <div>
          <h2 style={brandStyle}>Admin</h2>
          <p style={sidebarTextStyle}>Article Dashboard</p>
        </div>

        <nav style={navStyle}>
          <a href="#overview" style={navItemStyle}>
            Overview
          </a>
          <a href="#editor" style={navItemStyle}>
            Create Article
          </a>
          <a href="#manage" style={navItemStyle}>
            Manage Articles
          </a>
        </nav>

        <button onClick={handleLogout} style={logoutButtonStyle}>
          Logout
        </button>
      </aside>

      <main style={mainStyle}>
        <header style={headerStyle}>
          <div>
            <p style={eyebrowStyle}>Welcome back</p>
            <h1 style={titleStyle}>Professional Admin Dashboard</h1>
            <p style={subtitleStyle}>
              Create, edit, delete, and manage your website articles.
            </p>
          </div>

          <button onClick={handleLogout} style={topLogoutButtonStyle}>
            Logout
          </button>

          <button onClick={resetForm} style={secondaryButtonStyle}>
            Clear Form
          </button>
        </header>

        <section id="overview" style={statsGridStyle}>
          <div style={statCardStyle}>
            <p style={statLabelStyle}>Total Articles</p>
            <h2 style={statNumberStyle}>{totalArticles}</h2>
          </div>

          <div style={statCardStyle}>
            <p style={statLabelStyle}>Categories Used</p>
            <h2 style={statNumberStyle}>{totalCategories}</h2>
          </div>

          <div style={statCardStyle}>
            <p style={statLabelStyle}>Latest Article</p>
            <h2 style={smallStatTextStyle}>
              {latestArticle ? latestArticle.title : "No articles yet"}
            </h2>
          </div>
        </section>

        <section id="editor" style={panelStyle}>
          <div style={panelHeaderStyle}>
            <div>
              <h2 style={sectionTitleStyle}>
                {editingId ? "Edit Article" : "Create New Article"}
              </h2>
              <p style={sectionTextStyle}>
                Fill in the article details below.
              </p>
            </div>

            {editingId && <span style={editingBadgeStyle}>Editing Mode</span>}
          </div>

          <form onSubmit={handlePublish}>
            <div style={twoColumnStyle}>
              <div>
                <label style={labelStyle}>Article Title</label>
                <input
                  type="text"
                  name="title"
                  placeholder="Enter article title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  style={inputStyle}
                />
              </div>

              <div>
                <label style={labelStyle}>Category</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  style={inputStyle}
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <label style={labelStyle}>Written By</label>
            <input
              type="text"
              name="author"
              placeholder="Author name"
              value={formData.author}
              onChange={handleChange}
              required
              style={inputStyle}
            />

            <label style={labelStyle}>Article Photo</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              required={!formData.image}
              style={inputStyle}
            />

            {formData.image && (
              <img
                src={formData.image}
                alt="Preview"
                style={previewImageStyle}
              />
            )}

            <label style={labelStyle}>Short Description</label>
            <textarea
              name="shortDescription"
              placeholder="Short article summary"
              value={formData.shortDescription}
              onChange={handleChange}
              required
              rows="3"
              style={textareaStyle}
            />

            <label style={labelStyle}>Full Article Details</label>
            <textarea
              name="fullDetails"
              placeholder="Write full article details. Use new lines for separate paragraphs."
              value={formData.fullDetails}
              onChange={handleChange}
              required
              rows="10"
              style={textareaStyle}
            />

            <button
              type="submit"
              disabled={isPublishing}
              style={{
                width: "100%",
                padding: "16px",
                borderRadius: "14px",
                border: "none",
                background: "#0284c7",
                color: "#ffffff",
                fontSize: "16px",
                fontWeight: "900",
                cursor: "pointer",
              }}
            >
              {isPublishing
                ? "Publishing..."
                : editingId
                ? "Update Article"
                : "Publish Article"}
            </button>
          </form>
        </section>

        <section id="manage" style={panelStyle}>
          <div style={panelHeaderStyle}>
            <div>
              <h2 style={sectionTitleStyle}>Manage Articles</h2>
              <p style={sectionTextStyle}>
                Search, edit, or delete published articles.
              </p>
            </div>
          </div>

          <div style={toolbarStyle}>
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={inputStyle}
            />

            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              style={inputStyle}
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
            <div style={emptyStateStyle}>
              <h3>No articles found</h3>
              <p>Create a new article or change your search filters.</p>
            </div>
          ) : (
            <div style={articleListStyle}>
              {filteredArticles.map((article) => (
                <article key={article.id} style={articleCardStyle}>
                  {article.image && (
                    <img
                      src={article.image}
                      alt={article.title}
                      style={articleImageStyle}
                    />
                  )}

                  <div style={articleContentStyle}>
                    <div style={articleTopStyle}>
                      <span style={categoryBadgeStyle}>
                        {article.category}
                      </span>

                      <span style={dateStyle}>
                        {article.updatedAt
                          ? `Updated: ${article.updatedAt}`
                          : `Published: ${article.publishedAt}`}
                      </span>
                    </div>

                    <h3 style={articleTitleStyle}>{article.title}</h3>

                    <p style={articleTextStyle}>{article.text}</p>

                    <p style={authorStyle}>By {article.author}</p>

                    <div style={buttonRowStyle}>
                      <button
                        onClick={() => handleEditArticle(article)}
                        style={editButtonStyle}
                      >
                        Edit
                      </button>

                      <button
                        onClick={() => handleDeleteArticle(article.id)}
                        style={deleteButtonStyle}
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
      </main>
    </section>
  );
}

const pageStyle = {
  minHeight: "100vh",
  display: "grid",
  gridTemplateColumns: "260px 1fr",
  background: "#f1f5f9",
  fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
};

const sidebarStyle = {
  minHeight: "100vh",
  padding: "28px",
  background: "linear-gradient(180deg, #0f172a, #020617)",
  color: "#ffffff",
  position: "sticky",
  top: 0,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};

const brandStyle = {
  fontSize: "30px",
  fontWeight: "900",
  marginBottom: "4px",
};

const sidebarTextStyle = {
  color: "#94a3b8",
  fontSize: "14px",
};

const navStyle = {
  display: "grid",
  gap: "12px",
  marginTop: "40px",
};

const navItemStyle = {
  color: "#e2e8f0",
  textDecoration: "none",
  padding: "12px 14px",
  borderRadius: "14px",
  background: "rgba(255,255,255,0.06)",
  fontWeight: "700",
  fontSize: "14px",
};

const logoutButtonStyle = {
  padding: "13px 16px",
  borderRadius: "14px",
  border: "1px solid rgba(255,255,255,0.15)",
  background: "rgba(239,68,68,0.16)",
  color: "#fecaca",
  fontWeight: "900",
  cursor: "pointer",
};

const mainStyle = {
  padding: "40px",
};

const headerStyle = {
  display: "flex",
  justifyContent: "space-between",
  gap: "20px",
  alignItems: "center",
  marginBottom: "28px",
};

const eyebrowStyle = {
  color: "#0284c7",
  fontWeight: "900",
  marginBottom: "6px",
  textTransform: "uppercase",
  fontSize: "12px",
  letterSpacing: "1px",
};

const titleStyle = {
  fontSize: "clamp(32px, 4vw, 54px)",
  lineHeight: "1",
  fontWeight: "950",
  color: "#0f172a",
  margin: 0,
};

const subtitleStyle = {
  color: "#64748b",
  fontSize: "16px",
  marginTop: "12px",
};

const statsGridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "18px",
  marginBottom: "28px",
};

const statCardStyle = {
  background: "#ffffff",
  borderRadius: "24px",
  padding: "24px",
  boxShadow: "0 14px 40px rgba(15,23,42,0.06)",
  border: "1px solid #e2e8f0",
};

const statLabelStyle = {
  color: "#64748b",
  fontWeight: "800",
  fontSize: "13px",
  marginBottom: "10px",
};

const statNumberStyle = {
  color: "#0f172a",
  fontSize: "38px",
  fontWeight: "950",
  margin: 0,
};

const smallStatTextStyle = {
  color: "#0f172a",
  fontSize: "20px",
  fontWeight: "900",
  lineHeight: "1.25",
  margin: 0,
};

const panelStyle = {
  background: "#ffffff",
  borderRadius: "28px",
  padding: "28px",
  boxShadow: "0 14px 40px rgba(15,23,42,0.06)",
  border: "1px solid #e2e8f0",
  marginBottom: "28px",
};

const panelHeaderStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "20px",
  marginBottom: "24px",
};

const sectionTitleStyle = {
  color: "#0f172a",
  fontSize: "28px",
  fontWeight: "950",
  margin: 0,
};

const sectionTextStyle = {
  color: "#64748b",
  marginTop: "6px",
};

const twoColumnStyle = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "18px",
};

const labelStyle = {
  display: "block",
  color: "#0f172a",
  fontSize: "14px",
  fontWeight: "900",
  marginBottom: "8px",
};

const inputStyle = {
  width: "100%",
  padding: "14px 16px",
  marginBottom: "20px",
  borderRadius: "14px",
  border: "1px solid #cbd5e1",
  fontSize: "15px",
  outline: "none",
  background: "#ffffff",
  boxSizing: "border-box",
};

const textareaStyle = {
  ...inputStyle,
  resize: "vertical",
  fontFamily: "inherit",
  lineHeight: "1.6",
};

const primaryButtonStyle = {
  width: "100%",
  padding: "16px",
  borderRadius: "16px",
  border: "none",
  background: "linear-gradient(135deg, #0284c7, #2563eb)",
  color: "#ffffff",
  fontSize: "16px",
  fontWeight: "950",
  cursor: "pointer",
  boxShadow: "0 12px 30px rgba(37,99,235,0.25)",
};

const secondaryButtonStyle = {
  padding: "13px 18px",
  borderRadius: "14px",
  border: "1px solid #cbd5e1",
  background: "#ffffff",
  color: "#0f172a",
  fontWeight: "900",
  cursor: "pointer",
};

const topLogoutButtonStyle = {
  padding: "13px 18px",
  borderRadius: "14px",
  border: "none",
  background: "#ef4444",
  color: "#ffffff",
  fontWeight: "900",
  cursor: "pointer",
};

const editingBadgeStyle = {
  padding: "8px 12px",
  borderRadius: "999px",
  background: "#dbeafe",
  color: "#1d4ed8",
  fontSize: "12px",
  fontWeight: "900",
};

const previewImageStyle = {
  width: "100%",
  maxHeight: "340px",
  objectFit: "cover",
  borderRadius: "20px",
  marginBottom: "22px",
};

const toolbarStyle = {
  display: "grid",
  gridTemplateColumns: "1fr 220px",
  gap: "16px",
};

const articleListStyle = {
  display: "grid",
  gap: "18px",
};

const articleCardStyle = {
  display: "grid",
  gridTemplateColumns: "210px 1fr",
  gap: "18px",
  padding: "16px",
  borderRadius: "22px",
  border: "1px solid #e2e8f0",
  background: "#f8fafc",
};

const articleImageStyle = {
  width: "100%",
  height: "160px",
  objectFit: "cover",
  borderRadius: "16px",
};

const articleContentStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};

const articleTopStyle = {
  display: "flex",
  justifyContent: "space-between",
  gap: "12px",
  alignItems: "center",
};

const categoryBadgeStyle = {
  padding: "6px 10px",
  borderRadius: "999px",
  background: "#e0f2fe",
  color: "#0284c7",
  fontSize: "12px",
  fontWeight: "900",
};

const dateStyle = {
  color: "#64748b",
  fontSize: "12px",
  fontWeight: "700",
};

const articleTitleStyle = {
  color: "#0f172a",
  fontSize: "22px",
  fontWeight: "950",
  margin: "12px 0 8px",
};

const articleTextStyle = {
  color: "#475569",
  lineHeight: "1.6",
  margin: 0,
};

const authorStyle = {
  color: "#0284c7",
  fontWeight: "900",
  marginTop: "10px",
};

const buttonRowStyle = {
  display: "flex",
  gap: "10px",
  marginTop: "14px",
};

const editButtonStyle = {
  padding: "10px 16px",
  borderRadius: "12px",
  border: "none",
  background: "#0284c7",
  color: "#ffffff",
  fontWeight: "900",
  cursor: "pointer",
};

const deleteButtonStyle = {
  padding: "10px 16px",
  borderRadius: "12px",
  border: "none",
  background: "#ef4444",
  color: "#ffffff",
  fontWeight: "900",
  cursor: "pointer",
};

const emptyStateStyle = {
  textAlign: "center",
  padding: "50px 20px",
  borderRadius: "22px",
  background: "#f8fafc",
  color: "#64748b",
};

const loginPageStyle = {
  minHeight: "100vh",
  padding: "120px 20px",
  background:
    "radial-gradient(circle at top left, rgba(14,165,233,0.22), transparent 35%), linear-gradient(135deg, #f8fafc, #e0f2fe)",
  fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
};

const loginCardStyle = {
  maxWidth: "430px",
  margin: "0 auto",
  background: "#ffffff",
  padding: "34px",
  borderRadius: "28px",
  boxShadow: "0 20px 60px rgba(15,23,42,0.12)",
  border: "1px solid #e2e8f0",
};

const loginIconStyle = {
  width: "54px",
  height: "54px",
  borderRadius: "18px",
  display: "grid",
  placeItems: "center",
  background: "#e0f2fe",
  fontSize: "26px",
  marginBottom: "18px",
};

const loginTitleStyle = {
  color: "#0f172a",
  fontSize: "34px",
  fontWeight: "950",
  marginBottom: "8px",
};

const loginTextStyle = {
  color: "#64748b",
  marginBottom: "24px",
};

export default Admin;