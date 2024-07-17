"use client";
import React from "react";
import Footer from "@/components/About/Footer";
import HeroSection from "@/components/About/HeroSection";
import OurApproach from "@/components/About/OurApproach";
import Header from "@/components/common/Header";

const About = () => {
  return (
    <div className="about-us">
      <Header />
      <div id="content-wrapper">
        <HeroSection />
        <OurApproach />
      </div>
      <Footer />
    </div>
  );
};

export default About;
