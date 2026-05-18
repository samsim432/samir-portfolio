import { Link } from "react-router-dom";
import "./WhatIf.css";

function WhatIf() {
  const videos = [
    {
      image:
        "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=1200&auto=format&fit=crop",
      tag: "Space",
      title: "What If Earth Had Two Moons?",
      text: "Explore how Earth’s tides, climate, nights, and life could change if our planet had two moons.",
      link: "/reels",
    },
    {
image:
  "https://images.unsplash.com/photo-1614726365930-627c75da663e?q=80&w=1200&auto=format&fit=crop",tag: "Future",
      title: "What If Humans Lived on Mars?",
      text: "Discover the challenges of food, oxygen, shelter, gravity, and survival on the red planet.",
      link: "/reels",
    },
    {
      image:
        "https://images.unsplash.com/photo-1516534775068-ba3e7458af70?q=80&w=1200&auto=format&fit=crop",
      tag: "History",
      title: "What If Dinosaurs Never Went Extinct?",
      text: "Imagine how Earth, humans, and modern life might be different if dinosaurs still existed today.",
      link: "/reels",
    },
    {
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop",
      tag: "Technology",
      title: "What If AI Became More Intelligent?",
      text: "A creative look at artificial intelligence, future technology, and humanity’s next big questions.",
      link: "/reels",
    },
  ];

  return (
    <section className="whatif" id="whatif">
      <div className="whatif-container">
        <div className="whatif-header">
          <div>
            <p className="whatif-badge">Featured Stories</p>
            <h2>What If Series</h2>
          </div>

          <Link to="/reels" className="view-all-btn">
            View All
          </Link>
        </div>

        <p className="section-intro">
          Explore impossible questions through short reels, science-based
          explanations, and creative storytelling.
        </p>

        <div className="cards">
          {videos.map((item, index) => (
            <article className="card" key={index}>
              <div className="card-image">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />

                <span>{item.tag}</span>
              </div>

              <div className="card-body">
                <h3>{item.title}</h3>

                <p>{item.text}</p>

                <Link to={item.link} className="read-more">
                  Watch Reel →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatIf;