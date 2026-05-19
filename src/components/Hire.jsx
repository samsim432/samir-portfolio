import "./Hire.css";

function Hire() {
  const services = [
    {
      title: "Website Development",
      text: "Modern responsive websites using React, JavaScript, HTML, CSS, and modern frontend technologies.",
    },
    {
      title: "Personal Portfolio Websites",
      text: "Professional portfolio websites for students, creators, freelancers, and personal brands.",
    },
    {
      title: "Software & Digital Projects",
      text: "Creative software ideas, digital tools, UI design, and project development support.",
    },
    {
      title: "Content & Creative Ideas",
      text: "Educational content, creative storytelling, science explanations, and social media content ideas.",
    },
  ];

  const reasons = [
    "Computer Science Student",
    "Creative Problem Solver",
    "Modern Website Design",
    "Responsive Mobile-Friendly UI",
    "Fast Learning & Adaptability",
    "Passionate About Technology",
  ];

  return (
    <section className="hire-page">
      {/* HERO */}
      <div className="hire-hero">
        <span className="hire-label">Hire Me</span>

        <h1>Build Your Next Project With Me</h1>

        <p>
          Hi, I’m Samir Simkhada — a Computer Science student, developer,
          creative thinker, and digital creator. I build modern websites,
          personal portfolios, educational platforms, and creative digital
          experiences.
        </p>
      </div>

      {/* SERVICES */}
      <div className="hire-services">
        {services.map((item, index) => (
          <div className="hire-card" key={index}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>

      {/* WHY HIRE ME */}
      <div className="hire-why">
        <h2>Why People Hire Me</h2>

        <p>
          I combine technical skills, creativity, and modern design thinking to
          create useful and visually attractive digital experiences.
        </p>

        <div className="hire-reasons">
          {reasons.map((reason, index) => (
            <div className="reason-badge" key={index}>
              {reason}
            </div>
          ))}
        </div>
      </div>

      {/* CONTACT */}
      <div className="hire-contact-card">
        <h2>Let’s Work Together</h2>

        <p>
          Looking for a developer, portfolio creator, or creative collaborator?
          Feel free to contact me and let’s discuss your project.
        </p>

        <div className="hire-buttons">
          <a
            href="mailto:wrongsamir88@gmail.com?subject=Hiring%20Samir%20Simkhada"
            className="primary-btn"
          >
            Email Me
          </a>

          <a
            href="https://www.instagram.com/simkhadasamir333/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="secondary-btn"
          >
            Instagram
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hire;