import React, { useEffect } from "react";
import Header from "@/components/common/Header";
import Footer from "../components/Home/Footer";
import HeroSection from "../components/Home/HeroSection";
import NinjaScrollSection from "../components/Home/NinjaScrollSection";
import DragonSection from "../components/Home/DragonSection";
import SwiperDojoSection from "../components/Home/SwiperDojoSection";

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
