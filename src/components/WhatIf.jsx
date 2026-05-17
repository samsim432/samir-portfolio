import "./WhatIf.css";

function WhatIf() {
  const videos = [
    {
      image: "/reel-1.jpg",
      tag: "Space",
      title: "What If Earth Had Two Moons?",
      text: "Explore how Earth’s tides, climate, and life would change forever.",
      link: "/reels",
    },
    {
      image: "/reel-2.jpg",
      tag: "Future",
      title: "What If Humans Lived on Mars?",
      text: "A look at the challenges and possibilities of living on the red planet.",
      link: "/reels",
    },
    {
      image: "/reel-3.jpg",
      tag: "History",
      title: "What If Dinosaurs Never Went Extinct?",
      text: "How the world might look today if dinosaurs were still around.",
      link: "/reels",
    },
    {
      image: "/reel-4.jpg",
      tag: "Technology",
      title: "What If AI Became More Intelligent?",
      text: "Exploring the future of artificial intelligence and humanity.",
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

          <a href="/reels" className="view-all-btn">
            View All
          </a>
        </div>

        <p className="section-intro">
          Explore impossible questions through short reels, science-based
          explanations, and creative storytelling.
        </p>

        <div className="cards">
          {videos.map((item, index) => (
            <article className="card" key={index}>
              <div className="card-image">
                <img src={item.image} alt={item.title} />
                <span>{item.tag}</span>
              </div>

              <div className="card-body">
                <h3>{item.title}</h3>
                <p>{item.text}</p>

                <a href={item.link} className="read-more">
                  Watch Reel →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatIf;