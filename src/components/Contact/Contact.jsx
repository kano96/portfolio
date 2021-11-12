import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-container" id="contact">
      <div className="content">
        <div className="title">
          <h1 style={{ fontSize: "35px" }}>Send me a message</h1>
          <p>
            Got a question or proposal, or just want to say hello? Go ahead.
          </p>
        </div>
        <form
          action="https://formsubmit.co/kevintorres996@hotmail.com"
          method="POST"
        >
          <div className="formulario">
            <div className="row50">
              <input type="text" placeholder="Your Name" required name="name" />
            </div>
            <div className="row50">
              <input
                type="email"
                placeholder="Your Email"
                required
                name="email"
              />
            </div>
            <div className="row100">
              <input type="text" placeholder="Your Subject" name="_subject" />
            </div>
            <div className="row100">
              <textarea
                name="message"
                id="message"
                required
                placeholder="Your message"
              ></textarea>
            </div>
            <div className="button">
              <button type="submit">Send Message</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
