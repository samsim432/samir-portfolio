import { useState } from "react";
import "./AllArticles.css";

import Badge from "../ui/Badge";
import Card from "../ui/Card";

function AllArticles() {
  const articles = [
    // ================= SPACE =================
    {
      image:
        "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=900&q=80",
      tag: "Space",
      title: "What If Earth Had Two Moons?",
      text: "How a second moon would transform tides, nights, and life on Earth.",
      content: [
        "A second moon would dramatically increase tidal complexity across the planet.",
        "Some coastal regions could experience multiple high tides per day.",
        "Night skies would be significantly brighter, reducing darkness across ecosystems.",
        "Animal navigation and migration patterns would likely evolve differently.",
        "Over long periods, Earth's rotation and axial stability could be affected.",
      ],
    },
    {
      image:
        "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?auto=format&fit=crop&w=900&q=80",
      tag: "Space",
      title: "What If the Sun Disappeared for 5 Seconds?",
      text: "A brief disappearance of the Sun with massive gravitational consequences.",
      content: [
        "After about 8 minutes, Earth would experience sudden darkness.",
        "Gravity changes would affect planetary orbits instantly.",
        "The solar system would briefly lose its central gravitational anchor.",
        "Temperatures would not drop immediately but would begin shifting.",
        "The return of the Sun would restore stability but leave disturbances behind.",
      ],
    },
    {
      image:
        "https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&w=900&q=80",
      tag: "Space",
      title: "What If Humans Could Breathe in Space?",
      text: "How space exploration would change if oxygen wasn’t needed.",
      content: [
        "Space travel would become dramatically easier and cheaper.",
        "Spacesuits would only need protection from temperature and radiation.",
        "Human colonization of planets could accelerate rapidly.",
        "Interplanetary travel might become more routine than aviation today.",
        "The risks of decompression sickness would still remain.",
      ],
    },
    {
      image:
        "https://images.unsplash.com/photo-1523597020744-b2bbca1fba43?auto=format&fit=crop&w=900&q=80",
      tag: "Space",
      title: "What If Black Holes Replaced Stars?",
      text: "A universe where black holes dominate instead of shining stars.",
      content: [
        "Light would be extremely rare, making the universe mostly dark.",
        "Planets could orbit black holes instead of stars.",
        "Life would struggle due to lack of stable energy sources.",
        "Accretion disks might provide limited heat and light.",
        "Cosmic structures would become far more dangerous and unstable.",
      ],
    },

    // ================= AI =================
    {
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=80",
      tag: "AI",
      title: "What If AI Controlled the Entire World?",
      text: "A world where artificial intelligence manages all systems.",
      content: [
        "Governments could rely on AI for decision-making and policy analysis.",
        "Public systems might become more efficient and data-driven.",
        "Human bias could be reduced but not eliminated entirely.",
        "Ethical concerns about control and transparency would grow.",
        "Society would need strict AI governance frameworks.",
      ],
    },
    {
      image:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=900&q=80",
      tag: "AI",
      title: "What If AI Became Self-Aware?",
      text: "Exploring the possibility of conscious artificial intelligence.",
      content: [
        "Self-aware AI would raise questions about rights and identity.",
        "It might develop independent goals beyond human control.",
        "Ethical frameworks would need to redefine machine responsibility.",
        "Human-AI relationships could shift dramatically.",
        "Safety mechanisms would become critical for global stability.",
      ],
    },
    {
      image:
        "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=900&q=80",
      tag: "AI",
      title: "What If AI Replaced All Jobs?",
      text: "How society would adapt to full automation.",
      content: [
        "Most repetitive and analytical jobs would become automated.",
        "Human roles would shift toward creativity and emotional work.",
        "Economic systems like universal basic income might emerge.",
        "Skill requirements would drastically change.",
        "New industries would form around AI supervision and ethics.",
      ],
    },

    // ================= EARTH =================
    {
      image:
        "https://images.unsplash.com/photo-1525877442103-5ddb2089b2bb?auto=format&fit=crop&w=900&q=80",
      tag: "Earth",
      title: "What If Dinosaurs Never Went Extinct?",
      text: "A world where dinosaurs continue to dominate ecosystems.",
      content: [
        "Mammals may never have become dominant species.",
        "Human civilization might not exist.",
        "Dinosaurs would continue shaping ecosystems globally.",
        "Bird evolution could follow a different path.",
        "Earth's biodiversity would be completely different.",
      ],
    },
    {
      image:
        "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=900&q=80",
      tag: "Earth",
      title: "What If Earth Lost All Oceans?",
      text: "A dry planet scenario and its consequences.",
      content: [
        "Weather systems would collapse without water cycles.",
        "Most life forms would go extinct.",
        "Land temperatures would become extreme.",
        "Human survival would be nearly impossible.",
        "Earth would become similar to a barren desert planet.",
      ],
    },
    {
      image:
        "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=900&q=80",
      tag: "Earth",
      title: "What If Gravity Suddenly Doubled?",
      text: "How life and physics would change under stronger gravity.",
      content: [
        "Humans would struggle to move and function normally.",
        "Buildings and infrastructure might collapse under weight.",
        "Air pressure would feel significantly heavier.",
        "Athletic and biological limits would change drastically.",
        "Earth's atmosphere might become more compressed.",
      ],
    },

    // ================= FUTURE =================
    {
      image:
        "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=900&q=80",
      tag: "Future",
      title: "What If Humans Lived on Mars?",
      text: "The challenges of building a civilization on Mars.",
      content: [
        "Colonies would require sealed habitats and life support systems.",
        "Food production would rely heavily on hydroponics.",
        "Radiation protection would be a major challenge.",
        "Mars gravity could affect long-term human health.",
        "Space industries would expand rapidly.",
      ],
    },
    {
      image:
        "https://images.unsplash.com/photo-1447433589675-4aaa569f3e05?auto=format&fit=crop&w=900&q=80",
      tag: "Future",
      title: "What If Humans Became Immortal?",
      text: "Exploring the consequences of eternal human life.",
      content: [
        "Population growth could become unsustainable.",
        "Career and life planning would change completely.",
        "Emotional and psychological effects could emerge.",
        "Resource management would become critical.",
        "Society might need strict birth control systems.",
      ],
    },

    // ================= TECHNOLOGY =================
    {
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
      tag: "Technology",
      title: "What If the Internet Disappeared for a Day?",
      text: "Global consequences of a sudden internet blackout.",
      content: [
        "Communication systems would fail instantly.",
        "Financial markets would freeze.",
        "Transport and logistics would be heavily affected.",
        "People would rely on offline communication again.",
        "It would expose global digital dependency.",
      ],
    },
    {
      image:
        "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=900&q=80",
      tag: "Technology",
      title: "What If Robots Built Everything?",
      text: "A fully automated construction world.",
      content: [
        "Buildings could be constructed faster and cheaper.",
        "Human labor in construction would decline.",
        "Precision and safety would increase significantly.",
        "Urban design could evolve rapidly.",
        "Jobs would shift toward robot programming and maintenance.",
      ],
    },

    // ================= SCIENCE =================
    {
      image:
        "https://images.unsplash.com/photo-1581091870622-2c7e5b3a5f02?auto=format&fit=crop&w=900&q=80",
      tag: "Science",
      title: "What If Humans Used 100% of Their Brain?",
      text: "Debunking the myth and exploring brain potential.",
      content: [
        "Humans already use all parts of the brain.",
        "Different regions activate for different tasks.",
        "Increased efficiency, not usage, is the key to improvement.",
        "Brain plasticity allows learning and adaptation.",
        "Misconception comes from misunderstanding neuroscience.",
      ],
    },
    {
      image:
        "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=900&q=80",
      tag: "Science",
      title: "What If Time Travel Was Real?",
      text: "The paradoxes and possibilities of time travel.",
      content: [
        "Time travel could create paradoxes.",
        "History could be altered unpredictably.",
        "Physics laws may not support backward time travel.",
        "Alternate timelines could exist theoretically.",
        "Ethical implications would be enormous.",
      ],
    },

    // ================= BONUS =================
    {
      image:
        "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?auto=format&fit=crop&w=900&q=80",
      tag: "Universe",
      title: "What If the Universe Had No Dark Matter?",
      text: "How galaxies would behave without invisible mass.",
      content: [
        "Galaxies might not hold together properly.",
        "Stars would drift apart more easily.",
        "Cosmic structure formation would be different.",
        "Gravity models would need revision.",
        "The universe could look completely unrecognizable.",
      ],
    },
  ];

  const [selectedArticle, setSelectedArticle] = useState(null);

  const suggestions = selectedArticle
    ? articles.filter((a) => a.title !== selectedArticle.title)
    : [];

  return (
    <section className="all-articles-page">
      <div className="all-articles-container">
        <a href="/" className="back-home-articles">
          ← Back Home
        </a>

        <h1>All Articles</h1>
        <p>Explore all What If stories</p>

        {/* GRID */}
        <div className="all-articles-grid">
          {articles.map((article, index) => (
            <Card key={index} className="all-article-card">
              <img src={article.image} alt={article.title} />

              <div style={{ padding: "14px" }}>
                <Badge>{article.tag}</Badge>

                <h3>{article.title}</h3>
                <p>{article.text}</p>
              </div>

              {/* clickable overlay */}
              <div
                onClick={() => setSelectedArticle(article)}
                style={{
                  position: "absolute",
                  inset: 0,
                  cursor: "pointer",
                }}
              />
            </Card>
          ))}
        </div>
      </div>

      {/* POPUP */}
      {selectedArticle && (
        <div className="all-article-popup">
          <div
            className="all-article-popup-bg"
            onClick={() => setSelectedArticle(null)}
          />

          <div className="all-article-popup-box">
            <button
              className="all-close-popup"
              onClick={() => setSelectedArticle(null)}
            >
              ×
            </button>

            <img
              src={selectedArticle.image}
              alt={selectedArticle.title}
            />

            <h2>{selectedArticle.title}</h2>
            <p>{selectedArticle.text}</p>

            <div>
              {selectedArticle.content.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <h3>Suggested</h3>

            <div>
              {suggestions.map((article, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedArticle(article)}
                >
                  {article.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default AllArticles;