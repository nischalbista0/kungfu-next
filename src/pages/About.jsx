"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "@/components/About/Footer";
import HeroSection from "@/components/About/HeroSection";
import OurApproach from "@/components/About/OurApproach";
import Header from "@/components/common/Header";

gsap.registerPlugin(ScrollTrigger);

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
