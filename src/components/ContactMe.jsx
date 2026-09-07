import { useState } from "react";
import "./ContactMe.css";

function ContactMe() {
  const [result, setResult] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setResult("Sending...");

    const formData = new FormData(e.target);

    formData.append(
      "access_key",
      "3bf28586-9525-41eb-b230-948d1d0ca581"
    );

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message sent successfully!");
      e.target.reset();
    } else {
      setResult("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <div className="contact-left">
          <p className="contact-badge">
            Contact & Collaboration
          </p>

          <h2>
            Let’s Build Something Interesting Together
          </h2>

          <p className="contact-text">
            Want to collaborate, suggest ideas, discuss projects, or contact me?
            Send a message anytime.
          </p>

          <div className="contact-info">
            <div className="contact-card">
              <span>📧</span>

              <div>
                <h4>Email</h4>
                <p>wrongsamir88@gmail.com</p>
              </div>
            </div>

            <div className="contact-card">
              <span>🌍</span>

              <div>
                <h4>Topics</h4>
                <p>Science • Space • AI • History</p>
              </div>
            </div>

            <div className="contact-card">
              <span>🚀</span>

              <div>
                <h4>Available For</h4>
                <p>Collaboration & Creative Projects</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-right">
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="hidden"
              name="subject"
              value="New message from Samir Portfolio"
            />

            <div className="input-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
              />
            </div>

            <div className="input-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />
            </div>

            <div className="input-group">
              <textarea
                name="message"
                placeholder="Write your message..."
                required
              ></textarea>
            </div>

            <button type="submit">
              Send Message →
            </button>

            {result && (
              <p className="form-result">
                {result}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactMe;