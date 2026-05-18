import { useState } from "react";
import "./About.css";

function About() {
  const [openItem, setOpenItem] = useState("story");

  const sections = [
    {
      id: "story",
      title: "Who I Am",
      text: "Hi, I’m Samir Simkhada — a science storytelling creator, educational content maker, and curious learner. I create content that connects imagination with knowledge, helping people explore science, technology, history, space, AI, and real-world possibilities in a simple and interesting way.",
    },
    {
      id: "website",
      title: "Why I Created This Website",
      text: "I created this website as a central place for my articles, What If stories, science explanations, and creative educational content. Social media is great for short videos, but this website allows me to explain ideas in more detail and give readers a better learning experience.",
    },
    {
      id: "goals",
      title: "My Goals",
      text: "My goal is to build a trusted educational platform where curious people can learn through creative questions, clear explanations, and meaningful stories. I want to make learning feel exciting, not boring, and inspire people to think deeper about the world around them.",
    },
    {
      id: "content",
      title: "What I Write About",
      text: "On this website, I write about science, space, artificial intelligence, future technology, history, mysteries, human possibilities, and imaginative What If scenarios. Every topic is created to be easy to understand, useful, and enjoyable for readers.",
    },
    {
      id: "mission",
      title: "My Mission",
      text: "My mission is to make educational content more creative, accessible, and inspiring. I believe knowledge becomes powerful when it is explained clearly and shared with curiosity, imagination, and purpose.",
    },
  ];

  return (
    <section className="about-page">
      <div className="about-hero">
        <span className="about-label">About Me</span>

        <h1>Samir Simkhada</h1>

        <p>
          Science storytelling creator sharing educational articles, What If
          stories, and creative explanations about science, technology, space,
          history, AI, and imagination.
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