import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact">

      <h2>Contact Me</h2>

      <p>
        Feel free to contact me for internships, freelance work, or any
        collaboration.
      </p>

      <div className="contact-info">

        <div className="contact-card">
          <h3>Email</h3>
          <p>ashmiln009@gmail.com</p>
        </div>

        <div className="contact-card">
          <h3>Phone</h3>
          <p>+91 8157052986</p>
        </div>

        <div className="contact-card">
          <h3>Location</h3>
          <p>Kerala, India</p>
        </div>

      </div>

    </section>
  );
}

export default Contact;