"use client";
import Header from "@/components/common/Header";
import ContactForm from "@/components/Contact/ContactForm";
import Footer from "@/components/Contact/Footer";
import HeroSection from "@/components/Contact/HeroSection";
import React from "react";

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
