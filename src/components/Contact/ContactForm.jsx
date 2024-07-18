import React, { useEffect, useRef } from "react";
// import "intl-tel-input/build/css/intlTelInput.css";

const ContactForm = () => {
  const phoneInputRef = useRef(null);

  return (
    <form className="contact-form">
      <div className="input-with-label">
        <label htmlFor="name">Name</label>
        <div className="input">
          <input type="text" id="name" />
        </div>
      </div>

      <div className="input-with-label">
        <label htmlFor="email">Email Address</label>
        <div className="input">
          <input type="email" id="email" />
        </div>
      </div>

      <div className="input-with-label">
        <label htmlFor="phone">Phone number</label>
        <div className="input">
          <input id="phone" type="tel" ref={phoneInputRef} />
        </div>
      </div>

      <div className="input-with-label">
        <label htmlFor="message">Message</label>
        <div className="input">
          <textarea id="message" rows="4"></textarea>
        </div>
      </div>

      <p className="terms">
        * I agree to be contacted by the Kungfu Quiz team via email or phone
        regarding the mentioned concerns.
      </p>

      <button className="co-btn form-btn">Submit Request</button>
    </form>
  );
};

export default ContactForm;
