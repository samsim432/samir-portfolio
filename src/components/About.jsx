import { useState } from "react";
import "./About.css";

function About() {
  const [openItem, setOpenItem] = useState("background");

  const sections = [
    {
      id: "background",
      title: "My Background",
      text: "Hi, I’m Samir Simkhada, a Nepali content creator and web learner currently based in the UK. I have a strong interest in computer science, artificial intelligence, science, space, technology, and educational storytelling. I created this website to share useful knowledge in a simple and clear way.",
    },
    {
      id: "why",
      title: "Why I Created This Website",
      text: "I created this website because I wanted one trusted place where readers can find educational articles, AI explainers, science concepts, space topics, What If stories, and future technology ideas. Social media is good for short content, but this website allows me to explain topics in more detail.",
    },
    {
      id: "mission",
      title: "My Mission",
      text: "My mission is to make learning easier, clearer, and more interesting. I want to help students, curious readers, and knowledge lovers understand complex topics without confusing language.",
    },
    {
      id: "research",
      title: "How I Research Articles",
      text: "Before writing an article, I read and compare information from reliable sources such as educational websites, official sources, science publications, books, research summaries, and trusted technology resources. Then I rewrite the topic in my own simple language so readers can understand it easily.",
    },
    {
      id: "topics",
      title: "What I Write About",
      text: "This website focuses on artificial intelligence, science, space, technology, history, future ideas, digital learning, and creative educational stories. The goal is to make every article useful, original, and easy to read.",
    },
    {
      id: "values",
      title: "My Content Values",
      text: "I try to keep my content original, honest, simple, and helpful. I do not write articles only for search engines. I write for real people who want to learn something new.",
    },
    {
      id: "contact",
      title: "Contact Information",
      text: "For questions, feedback, corrections, or collaboration, you can contact me through my website contact page or social media links. I welcome suggestions that help improve the quality and accuracy of this website.",
    },
  ];

  return (
    <section className="about-page">
      <div className="about-hero">
        <div className="about-hero-content">
          <span className="about-label">About This Website</span>

          <h1>Hi, I’m Samir Simkhada</h1>

          <p>
            I create simple educational articles about AI, science, space,
            technology, history, and future ideas for students and curious readers.
          </p>

          <div className="about-hero-buttons">
            <a href="/articles">Read Articles</a>
            <a href="/hire">Contact Me</a>
          </div>
        </div>

        <div className="about-photo-box">
          <picture>
            <source srcSet="/profile.webp" type="image/webp" />
            <img
              src="/profile.webp"
              alt="Samir Simkhada"
              className="about-photo"
              width="260"
              height="260"
              loading="eager"
              decoding="async"
            />
          </picture>
        </div>
      </div>

      <div className="about-intro">
        <h2>My Purpose</h2>
        <p>
          This website is built to share original, helpful, and easy-to-understand
          knowledge. I believe educational content should be clear, useful, and
          enjoyable for everyone.
        </p>
      </div>

      <div className="about-accordion">
        {sections.map((item) => (
          <div
            className={`about-card ${openItem === item.id ? "active" : ""}`}
            key={item.id}
          >
            <button
              className="about-card-header"
              onClick={() =>
                setOpenItem(openItem === item.id ? null : item.id)
              }
              aria-expanded={openItem === item.id}
            >
              <span>{item.title}</span>
              <strong>{openItem === item.id ? "−" : "+"}</strong>
            </button>

            {openItem === item.id && (
              <div className="about-card-body">
                <p>{item.text}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;