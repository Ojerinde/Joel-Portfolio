import { AiOutlineMail, AiOutlineContacts } from "react-icons/ai";
import { FaWhatsappSquare } from "react-icons/fa";
import { ImMail } from "react-icons/im";
import React from "react";
const Contact: React.FC = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact__header">
        <h3>
          <span>
            <AiOutlineContacts className="contact__icon" />
          </span>
          Contact
        </h3>
        <h4>{"Can we talk"}?</h4>
      </div>
      <div className="contact__box">
        <a href="https://wa.me/2348143368703" target="_blank">
          <p>
            <span>
              <FaWhatsappSquare />
            </span>
            <span> WhatsApp</span>
          </p>
        </a>
        <a href="mailto:joelojerinde@gmail.com" target="_blank">
          <p>
            <span>
              <ImMail />
            </span>
            <span> Email</span>
          </p>
        </a>
      </div>
    </section>
  );
};
export default Contact;
