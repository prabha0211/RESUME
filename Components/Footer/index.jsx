import React from "react";
import "./index.css";

const ContactUs = () => {
  return (
    <footer className="contact-footer">
      <div className="contact-block">
        <h2 className="contact-heading">Contact Info</h2>
        <p className="contact-description">
          If you have any questions or need assistance, feel free to reach out
          to us.
        </p>
        <p className="contact-phone">
          <strong>Phone:</strong> 📞 <a href="tel:+919092152363">9092152363</a>
        </p>
        <p className="contact-email">
          <strong>Email:</strong> ✉️{" "}
          <a className="contact-link" href="mailto:prabhaanbu0211@gmail.com">
            prabhaanbu0211@gmail.com
          </a>
        </p>
        <p className="contact-address">
          <strong>Address:</strong> 🏠 #952 Maaruthi nagar, Bengaluru, Karnataka,
        </p>
      </div>

      <div className="contact-block">
        <h2 className="contact-heading">Follow Us</h2>
        <p className="contact-follow">
          <a
            className="contact-link"
            href="https://www.linkedin.com/in/prabha-devi-91993b273/"
          >
            LinkedIn
          </a> <br /> <br />
          <a className="contact-link"
          href="https://github.com/prabha0211"
          > Github</a>
        </p>
      </div>

      <div className="contact-block">
        <h2 className="contact-heading">Business Hours</h2>
        <p className="business-hours">Mon-Fri: 9 AM - 5 PM</p>
        <p className="business-hours">Sat-Sun: Closed</p>
      </div>
    </footer>
  );
};

export default ContactUs;
