import "./Hire.css";

function Hire() {
  const services = [
    {
      title: "Website Development",
      text: "Responsive websites using React, JavaScript, HTML, and CSS.",
    },
    {
      title: "Portfolio Websites",
      text: "Clean personal websites for students, creators, and freelancers.",
    },
    {
      title: "Frontend UI Design",
      text: "Modern mobile-friendly layouts, landing pages, and user interfaces.",
    },
    {
      title: "Content Support",
      text: "Educational content ideas, article structure, and creative planning.",
    },
  ];

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Responsive Design",
    "Firebase",
    "GitHub",
    "SEO Basics",
  ];

  const portfolio = [
    {
      title: "Personal Portfolio Website",
      text: "A modern website to share articles, projects, and educational content.",
    },
    {
      title: "Educational Articles Platform",
      text: "Content pages focused on AI, science, space, and technology topics.",
    },
    {
      title: "Quiz & Learning Features",
      text: "Interactive learning ideas built for students and curious readers.",
    },
  ];

  return (
    <section className="hire-page">
      <div className="hire-hero">
        <span className="hire-label">Work With Me</span>

        <h1>Hire Me for Websites, Content, and Digital Projects</h1>

        <p>
          Hi, I’m Samir Simkhada. I create responsive websites, personal
          portfolio pages, frontend designs, and educational digital content.
          I focus on clean design, simple user experience, and useful online
          projects.
        </p>

        <div className="hire-hero-buttons">
          <a href="#contact">Contact Me</a>
          <a href="#portfolio">View Portfolio</a>
        </div>
      </div>

      <div className="hire-section">
        <div className="hire-section-title">
          <span>Services</span>
          <h2>What I Can Help With</h2>
          <p>
            I can help with simple, modern, and mobile-friendly digital projects.
          </p>
        </div>

        <div className="hire-services">
          {services.map((item, index) => (
            <div className="hire-card" key={index}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="hire-info-grid">
        <div className="hire-info-card">
          <span>Skills</span>
          <h2>Technical Skills</h2>

          <div className="skills-list">
            {skills.map((skill, index) => (
              <strong key={index}>{skill}</strong>
            ))}
          </div>
        </div>

        <div className="hire-info-card">
          <span>Experience</span>
          <h2>My Background</h2>

          <p>
            I have experience building React websites, portfolio pages, content
            websites, and learning-based digital projects. I also create
            educational articles about AI, science, space, and technology.
          </p>
        </div>
      </div>

      <div className="hire-section" id="portfolio">
        <div className="hire-section-title">
          <span>Portfolio</span>
          <h2>Projects & Work Areas</h2>
          <p>
            Here are some examples of the type of projects I work on.
          </p>
        </div>

        <div className="portfolio-grid">
          {portfolio.map((item, index) => (
            <div className="portfolio-card" key={index}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="hire-contact-card" id="contact">
        <div className="contact-content">
          <span>Contact</span>
          <h2>Let’s Discuss Your Project</h2>

          <p>
            For website projects, portfolio pages, content support, or
            collaboration, you can contact me using email or social media.
          </p>

          <div className="contact-details">
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:wrongsamir88@gmail.com">
                wrongsamir88@gmail.com
              </a>
            </p>

            <p>
              <strong>Instagram:</strong>{" "}
              <a
                href="https://www.instagram.com/simkhadasamir333/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                @simkhadasamir333
              </a>
            </p>
          </div>
        </div>

        <form
          className="contact-form"
          action="mailto:wrongsamir88@gmail.com"
          method="post"
          encType="text/plain"
        >
          <label>
            Your Name
            <input type="text" name="name" placeholder="Enter your name" />
          </label>

          <label>
            Your Email
            <input type="email" name="email" placeholder="Enter your email" />
          </label>

          <label>
            Project Details
            <textarea
              name="message"
              rows="5"
              placeholder="Tell me about your project"
            ></textarea>
          </label>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Hire;