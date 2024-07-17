import React from "react";
import Header from "../components/common/Header";
import HeroSection from "../components/Contact/HeroSection";
import ContactForm from "../components/Contact/ContactForm";
import Footer from "../components/Contact/Footer";

const Contact = () => {
  return (
    <div className="contact">
      <Header />

      <div className="contact-main-container">
        <section className="our-approach" id="content-wrapper">
          <div className="custom-container remove-padding-top">
            <div className="contact-container center">
              <HeroSection />

              <ContactForm />
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
