"use client";
import Header from "@/components/common/Header";
import DragonSection from "@/components/Home/DragonSection";
import Footer from "@/components/Home/Footer";
import HeroSection from "@/components/Home/HeroSection";
import NinjaScrollSection from "@/components/Home/NinjaScrollSection";
import SwiperDojoSection from "@/components/Home/SwiperDojoSection";
import React from "react";

const Home = () => {
  return (
    <div className="homepage-body">
      <Header />

      <main id="home-page">
        <HeroSection />

        <NinjaScrollSection />

        <DragonSection />

        <SwiperDojoSection />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
