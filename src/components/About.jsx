import { useState } from "react";
import "./About.css";

function About() {
  const [openItem, setOpenItem] = useState("story");

  const sections = [
    {
      id: "story",
      title: "Who I Am",
      text: "Hi, I’m Samir Simkhada, a Computer Science student and aspiring full-stack developer from Nepal, currently based in the UK. I’m passionate about building modern, responsive, and user-friendly web applications using technologies like HTML, CSS, JavaScript, React, Node.js, and Python.",
    },
    {
      id: "developer",
      title: "What I Do",
      text: "I enjoy turning ideas into real digital experiences. I create websites, personal portfolios, software projects, and clean user interfaces. I continuously improve my skills through hands-on projects, problem-solving, and learning new technologies.",
    },
    {
      id: "website",
      title: "Why I Created This Website",
      text: "I created this website as a central place to showcase my developer journey, personal projects, articles, What If stories, science explanations, and creative educational content. Social media is great for short videos, but this website allows me to explain ideas in more detail and share my work professionally.",
    },
    {
      id: "content",
      title: "What I Write About",
      text: "Alongside coding, I write creative What If stories and educational content about IT, artificial intelligence, robots, space, physics, science, future technology, and imagination. I like combining creativity with knowledge to make complex ideas simple and interesting.",
    },
    {
      id: "goals",
      title: "My Goals",
      text: "My goal is to grow as a developer, build impactful software, and create clean, professional solutions that help people and businesses online. I want to keep improving my technical skills while also building creative content that inspires curiosity.",
    },
    {
      id: "mission",
      title: "My Mission",
      text: "My mission is to make technology and educational content more creative, accessible, and inspiring. I believe knowledge becomes powerful when it is explained clearly and shared with curiosity, imagination, and purpose.",
    },
    {
      id: "interests",
      title: "My Interests",
      text: "Outside of coding, I enjoy gaming, reading, exploring new creative ideas, learning about technology and design, and thinking about future possibilities in science and artificial intelligence.",
    },
  ];

  return (
    <section className="about-page">
      <div className="about-hero">
        <span className="about-label">About Me</span>

        <h1>Samir Simkhada</h1>

        <p>
          Computer Science student, aspiring full-stack developer, and creative
          storyteller from Nepal, currently based in the UK.
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