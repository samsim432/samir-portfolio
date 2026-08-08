import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import stacksData from "../data/stacksData";
import "./Stack.css";

function Stack() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(stacksData.map((stack) => stack.category)),
  ];

  const filteredStacks = useMemo(() => {
    const query = search.toLowerCase().trim();

    return stacksData.filter((stack) => {
      const matchesSearch =
        !query ||
        stack.title.toLowerCase().includes(query) ||
        stack.shortTitle.toLowerCase().includes(query) ||
        stack.category.toLowerCase().includes(query) ||
        stack.description.toLowerCase().includes(query) ||
        stack.technologies.some((technology) =>
          technology.toLowerCase().includes(query)
        );

      const matchesCategory =
        category === "All" || stack.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  return (
    <main className="stack-page">
      <section className="stack-browser">
        <div className="stack-container">
          <div className="stack-topbar">
            <Link to="/" className="stack-back">
              <span>←</span>
              Back Home
            </Link>

            <div className="stack-result-count">
              {filteredStacks.length} of {stacksData.length} stacks
            </div>
          </div>

          <div className="stack-controls">
            <div className="stack-search">
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="stack-search-icon"
              >
                <path
                  d="m21 21-4.35-4.35m2.35-5.65a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>

              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search stacks, tools or careers..."
                aria-label="Search developer stacks"
              />

              {search && (
                <button
                  type="button"
                  className="stack-search-clear"
                  onClick={() => setSearch("")}
                  aria-label="Clear search"
                >
                  ×
                </button>
              )}
            </div>

            <div className="stack-select-wrap">
              <select
                value={category}
                onChange={(event) => setCategory(event.target.value)}
                aria-label="Filter stacks by category"
              >
                {categories.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {filteredStacks.length > 0 ? (
            <div className="developer-stack-grid">
              {filteredStacks.map((stack) => (
                <Link
                  to={`/stack/${stack.slug}`}
                  className="developer-stack-card"
                  key={stack.id}
                >
                  <div className="developer-card-header">
                    <div className="developer-stack-icon">
                      {stack.icon}
                    </div>

                    <span className="developer-stack-arrow">
                      ↗
                    </span>
                  </div>

                  <div className="developer-stack-category">
                    {stack.category}
                  </div>

                  <h2>{stack.shortTitle}</h2>

                  <p className="developer-stack-description">
                    {stack.description}
                  </p>

                  <div className="stack-tech-list">
                    {stack.technologies
                      .slice(0, 3)
                      .map((technology) => (
                        <span key={technology}>
                          {technology}
                        </span>
                      ))}
                  </div>

                  <div className="developer-card-footer">
                    <span>
                      {stack.roadmap.length} steps
                    </span>

                    <strong>
                      Roadmap
                      <span>→</span>
                    </strong>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="stack-empty">
              <div className="stack-empty-icon">⌕</div>

              <h2>No stacks found</h2>

              <p>
                Try another career, technology, or category.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setCategory("All");
                }}
              >
                Reset filters
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default Stack;