import IntlTelInput from "intl-tel-input";
import React from "react";

const ContactForm = () => {
  return (
    <form class="contact-form">
      <div class="input-with-label">
        <label for="name">Name</label>

        <div class="input">
          <input type="text" id="name" />
        </div>
      </div>

      <div class="input-with-label">
        <label for="email">Email</label>

        <div class="input">
          <input type="email" id="email" />
        </div>
      </div>

      <div class="input-with-label">
        <label for="phone">Phone number</label>

        <div class="input">
          {/* <input id="phone" type="tel" /> */}

          {/* <IntlTelInput
            initOptions={{
              initialCountry: "np",
              utilsScript: "/intl-tel-input/js/utils.js?1720774106479",
            }}
          /> */}
        </div>
      </div>

      <div class="input-with-label">
        <label for="name">Message</label>

        <div class="input">
          <textarea id="message" rows="4"></textarea>
        </div>
      </div>

      <p class="terms">
        * I agree to be contacted by the Kungfu Quiz team via email or phone
        regarding the mentioned concerns.
      </p>

      <button class="co-btn form-btn">Send</button>
    </form>
  );
};

export default ContactForm;
