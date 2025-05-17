import React from "react";
import "./Contact.css";
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Contact = ({ darkMode }) => {
  return (
    <footer className="contact-container">
      <div className="contact-section">
        <div className="contact-info">
          <h3>Address</h3>
          <p>Indian Institute of Technology Roorkee,</p>
          <p>Roorkee, Uttarakhand 247667</p>
        </div>

        <div className="contact-info">
          <h3>Contact</h3>
          <p>+91 989602xxx</p>
        </div>

        <div className="contact-info">
          <h3>Email</h3>
          <p>credex@gmail.com</p>
          <div className="social-icons">
            <a
              href="https://www.iitr.ac.in/"
              target="_blank"
              rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a
              href="https://www.iitr.ac.in/"
              target="_blank"
              rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a
              href="https://www.iitr.ac.in/"
              target="_blank"
              rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
