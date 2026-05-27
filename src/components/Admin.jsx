import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import "./Admin.css";

const ADMIN_PASSWORD = "Samir@321";

const CATEGORY_OPTIONS = [
  "AI",
  "Technology",
  "Space",
  "Earth",
  "Physics",
  "Chemistry",
  "General",
];

const emptyForm = {
  title: "",
  slug: "",
  category: "",
  images: [""],
  author: "Samir Simkhada",
  summary: "",
  takeaways: "",
  content: "",
};

function createSlug(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function getTodayDate() {
  return new Date().toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function parseContent(contentText) {
  return contentText
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      if (line.startsWith("## ")) {
        return {
          type: "heading",
          text: line.replace("## ", ""),
        };
      }

      if (line.startsWith("> ")) {
        return {
          type: "quote",
          text: line.replace("> ", ""),
        };
      }

      if (line.startsWith("- ")) {
        return {
          type: "list",
          items: line
            .split("- ")
            .map((item) => item.trim())
            .filter(Boolean),
        };
      }

      return {
        type: "paragraph",
        text: line,
      };
    });
}

function stringifyContent(content) {
  if (!Array.isArray(content)) return "";

  return content
    .map((block) => {
      if (typeof block === "string") return block;

      if (block.type === "heading") return `## ${block.text || ""}`;
      if (block.type === "quote") return `> ${block.text || ""}`;
      if (block.type === "list" && Array.isArray(block.items)) {
        return block.items.map((item) => `- ${item}`).join(" ");
      }

      return block.text || "";
    })
    .join("\n\n");
}

function Admin() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("samir-admin-login") === "true"
  );
  const [password, setPassword] = useState("");
  const [articles, setArticles] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);
  const [saving, setSaving] = useState(false);
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");

  useEffect(() => {
    if (!isLoggedIn) return;

    const articlesQuery = query(collection(db, "articles"));

    const unsubscribe = onSnapshot(articlesQuery, (snapshot) => {
      const firebaseArticles = snapshot.docs.map((item) => ({
        id: item.id,
        ...item.data(),
      }));

      setArticles(firebaseArticles);
    });

    return () => unsubscribe();
  }, [isLoggedIn]);

  const categories = useMemo(() => {
    return ["All", ...CATEGORY_OPTIONS];
  }, []);

  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const matchesSearch =
        article.title?.toLowerCase().includes(search.toLowerCase()) ||
        article.category?.toLowerCase().includes(search.toLowerCase()) ||
        article.summary?.toLowerCase().includes(search.toLowerCase()) ||
        article.text?.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        categoryFilter === "All" || article.category === categoryFilter;

      return matchesSearch && matchesCategory;
    });
  }, [articles, search, categoryFilter]);

  const latestArticle = articles[0];

  const handleLogin = (event) => {
    event.preventDefault();

    if (password === ADMIN_PASSWORD) {
      localStorage.setItem("samir-admin-login", "true");
      setIsLoggedIn(true);
      setPassword("");
    } else {
      alert("Wrong password");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("samir-admin-login");
    setIsLoggedIn(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
      ...(name === "title" && !editingId
        ? {
            slug: createSlug(value),
          }
        : {}),
    }));
  };

  const handleImageChange = (index, value) => {
    setForm((current) => {
      const updatedImages = [...current.images];
      updatedImages[index] = value;

      return {
        ...current,
        images: updatedImages,
      };
    });
  };

  const addImageField = () => {
    setForm((current) => ({
      ...current,
      images: [...current.images, ""],
    }));
  };

  const removeImageField = (index) => {
    setForm((current) => {
      const updatedImages = current.images.filter((_, itemIndex) => {
        return itemIndex !== index;
      });

      return {
        ...current,
        images: updatedImages.length > 0 ? updatedImages : [""],
      };
    });
  };

  const resetForm = () => {
    setForm(emptyForm);
    setEditingId(null);
  };

  const validateForm = () => {
    const cleanImages = form.images.map((image) => image.trim()).filter(Boolean);
    const cleanTakeaways = form.takeaways
      .split("\n")
      .map((item) => item.trim())
      .filter(Boolean);

    if (!form.title.trim()) {
      alert("Article title is required.");
      return false;
    }

    if (!form.slug.trim()) {
      alert("Article slug is required.");
      return false;
    }

    if (!form.category.trim()) {
      alert("Please select a category.");
      return false;
    }

    if (!CATEGORY_OPTIONS.includes(form.category)) {
      alert("Please select a valid category.");
      return false;
    }

    if (cleanImages.length === 0) {
      alert("At least one image URL is required.");
      return false;
    }

    if (!form.author.trim()) {
      alert("Author name is required.");
      return false;
    }

    if (!form.summary.trim()) {
      alert("Article summary is required.");
      return false;
    }

    if (cleanTakeaways.length === 0) {
      alert("At least one key takeaway is required.");
      return false;
    }

    if (!form.content.trim()) {
      alert("Article content is required.");
      return false;
    }

    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) return;

    setSaving(true);

    const cleanImages = form.images.map((image) => image.trim()).filter(Boolean);
    const cleanTakeaways = form.takeaways
      .split("\n")
      .map((item) => item.trim())
      .filter(Boolean);

    const articleData = {
      title: form.title.trim(),
      slug: form.slug.trim() || createSlug(form.title),
      category: form.category.trim(),
      images: cleanImages,
      image: cleanImages[0],
      author: form.author.trim(),
      date: editingId ? undefined : getTodayDate(),
      summary: form.summary.trim(),
      text: form.summary.trim(),
      takeaways: cleanTakeaways,
      content: parseContent(form.content),
      updatedAt: serverTimestamp(),
    };

    try {
      if (editingId) {
        const dataToUpdate = { ...articleData };
        delete dataToUpdate.date;

        await updateDoc(doc(db, "articles", editingId), dataToUpdate);
        alert("Article updated successfully!");
      } else {
   await addDoc(collection(db, "articles"), {
  ...articleData,
  createdAt: serverTimestamp(),
  publishedAt: serverTimestamp(),
});
        alert("Article published successfully!");
      }

      resetForm();
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  const handleEdit = (article) => {
    setEditingId(article.id);

    setForm({
      title: article.title || "",
      slug: article.slug || "",
      category: article.category || "",
      images:
        Array.isArray(article.images) && article.images.length > 0
          ? article.images
          : [article.image || ""],
      author: article.author || "Samir Simkhada",
      summary: article.summary || article.text || "",
      takeaways: Array.isArray(article.takeaways)
        ? article.takeaways.join("\n")
        : "",
      content: stringifyContent(article.content),
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleDelete = async (articleId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this article?"
    );

    if (!confirmDelete) return;

    try {
      await deleteDoc(doc(db, "articles", articleId));
      alert("Article deleted successfully!");
    } catch (error) {
      console.error(error);
      alert("Could not delete article.");
    }
  };

  if (!isLoggedIn) {
    return (
      <section className="admin-login-page">
        <form className="admin-login-card" onSubmit={handleLogin}>
          <div className="admin-login-icon">🔐</div>

          <h1>Admin Login</h1>
          <p>Enter your admin password to manage articles.</p>

          <input
            type="password"
            placeholder="Admin password"
            value={password}
            required
            onChange={(event) => setPassword(event.target.value)}
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
          <h2>Samir</h2>
          <p>Portfolio Admin</p>

          <nav>
            <a href="#write">Write Article</a>
            <a href="#manage">Manage Articles</a>
            <Link to="/articles">View Articles</Link>
            <Link to="/">Visit Website</Link>
          </nav>
        </div>

        <button
          type="button"
          className="admin-sidebar-logout"
          onClick={handleLogout}
        >
          Logout
        </button>
      </aside>

      <main className="admin-main">
        <header className="admin-header">
          <div>
            <p className="admin-eyebrow">Dashboard</p>
            <h1>Article Manager</h1>
            <p className="admin-subtitle">
              Create reader-friendly articles with image, category, author,
              automatic date, reading time, summary and key takeaways.
            </p>
          </div>

          <div className="admin-header-actions">
            <button type="button" className="admin-light-btn" onClick={resetForm}>
              New Article
            </button>

            <Link to="/articles" className="admin-danger-btn">
              View Site
            </Link>
          </div>
        </header>

        <section className="admin-stats-grid">
          <div className="admin-stat-card">
            <p>Total Articles</p>
            <h2>{articles.length}</h2>
          </div>

          <div className="admin-stat-card">
            <p>Categories</p>
            <h2>{CATEGORY_OPTIONS.length}</h2>
          </div>

          <div className="admin-stat-card">
            <p>Latest Article</p>
            <h3>{latestArticle?.title || "No article yet"}</h3>
          </div>
        </section>

        <section className="admin-panel" id="write">
          <div className="admin-panel-header">
            <div>
              <h2>{editingId ? "Edit Article" : "Write New Article"}</h2>
              <p>
                All fields are required. The article date will be added
                automatically when you publish.
              </p>
            </div>

            {editingId && <span className="admin-editing-badge">Editing</span>}
          </div>

          <form className="admin-form" onSubmit={handleSubmit}>
            <div className="admin-two-column">
              <div>
                <label>Article Title *</label>
                <input
                  type="text"
                  name="title"
                  placeholder="Example: How AI Is Changing Web Development"
                  value={form.title}
                  required
                  onChange={handleChange}
                />
              </div>

              <div>
                <label>Slug *</label>
                <input
                  type="text"
                  name="slug"
                  placeholder="how-ai-is-changing-web-development"
                  value={form.slug}
                  required
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="admin-two-column">
              <div>
                <label>Category *</label>
                <select
                  name="category"
                  value={form.category}
                  required
                  onChange={handleChange}
                >
                  <option value="">Select category</option>
                  {CATEGORY_OPTIONS.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label>Author *</label>
                <input
                  type="text"
                  name="author"
                  placeholder="Samir Simkhada"
                  value={form.author}
                  required
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="admin-date-note">
              <strong>Automatic date:</strong>{" "}
              {editingId
                ? "Existing article date will stay the same."
                : getTodayDate()}
            </div>

            <label>Image URLs *</label>

            <div className="admin-image-fields">
              {form.images.map((imageUrl, index) => (
                <div key={index} className="admin-image-row">
                  <input
                    type="url"
                    placeholder={`Image URL ${index + 1}`}
                    value={imageUrl}
                    required={index === 0}
                    onChange={(event) =>
                      handleImageChange(index, event.target.value)
                    }
                  />

                  <button
                    type="button"
                    className="admin-remove-image-btn"
                    onClick={() => removeImageField(index)}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <button
              type="button"
              className="admin-add-image-btn"
              onClick={addImageField}
            >
              + Add another image
            </button>

            {form.images.filter(Boolean).length > 0 && (
              <div className="admin-preview-grid">
                {form.images
                  .map((image) => image.trim())
                  .filter(Boolean)
                  .map((image) => (
                    <img key={image} src={image} alt="Article preview" />
                  ))}
              </div>
            )}

            <label>Article Summary *</label>
            <textarea
              name="summary"
              rows="4"
              placeholder="Write a short, friendly summary of the article..."
              value={form.summary}
              required
              onChange={handleChange}
            />

            <label>Key Takeaways *</label>
            <textarea
              name="takeaways"
              rows="5"
              placeholder={`Write one takeaway per line:\nAI can help developers work faster\nGood design makes articles easier to read\nShort sections improve reader focus`}
              value={form.takeaways}
              required
              onChange={handleChange}
            />

            <label>Article Content *</label>
            <textarea
              name="content"
              rows="16"
              placeholder={`Write your article here.

Use:
## Heading
Normal paragraph text
> Quote text
- List item one - List item two - List item three`}
              value={form.content}
              required
              onChange={handleChange}
            />

            <div className="admin-writing-help">
              <h3>Writing format</h3>
              <p>
                <strong>Heading:</strong> Start a line with ## Example heading
              </p>
              <p>
                <strong>Quote:</strong> Start a line with &gt; Your quote
              </p>
              <p>
                <strong>List:</strong> Start a line with - Item one - Item two
              </p>
              <p>
                <strong>Paragraph:</strong> Write normal text on its own line
              </p>
            </div>

            <button type="submit" className="admin-primary-btn" disabled={saving}>
              {saving
                ? "Saving..."
                : editingId
                  ? "Update Article"
                  : "Publish Article"}
            </button>
          </form>
        </section>

        <section className="admin-panel" id="manage">
          <div className="admin-panel-header">
            <div>
              <h2>Manage Articles</h2>
              <p>Edit, delete and search your published articles.</p>
            </div>
          </div>

          <div className="admin-toolbar">
            <input
              type="text"
              placeholder="Search articles..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />

            <select
              value={categoryFilter}
              onChange={(event) => setCategoryFilter(event.target.value)}
            >
              {categories.map((category) => (
                <option key={category}>{category}</option>
              ))}
            </select>
          </div>

          {filteredArticles.length === 0 ? (
            <div className="admin-empty-state">
              <h3>No articles found</h3>
              <p>Create your first article or adjust your search.</p>
            </div>
          ) : (
            <div className="admin-list">
              {filteredArticles.map((item) => (
                <div key={item.id} className="admin-list-card">
                  {item.image ? (
                    <img src={item.image} alt={item.title} />
                  ) : (
                    <div className="admin-list-placeholder">No Image</div>
                  )}

                  <div className="admin-list-content">
                    <div>
                      <div className="admin-list-top">
                        <span>{item.category || "Uncategorized"}</span>
                        <small>{item.date || "No date"}</small>
                      </div>

                      <h3>{item.title}</h3>

                      {(item.summary || item.text) && (
                        <p>{item.summary || item.text}</p>
                      )}

                      <strong>By {item.author || "Samir Simkhada"}</strong>
                    </div>

                    <div className="admin-button-row">
                      <Link
                        to={`/articles/${item.slug || item.id}`}
                        className="admin-view-btn"
                      >
                        View
                      </Link>

                      <button
                        type="button"
                        className="admin-edit-btn"
                        onClick={() => handleEdit(item)}
                      >
                        Edit
                      </button>

                      <button
                        type="button"
                        className="admin-delete-btn"
                        onClick={() => handleDelete(item.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
    </section>
  );
}

export default Admin;