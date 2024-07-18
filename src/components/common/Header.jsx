import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // ScrollTrigger to toggle the fixed-header className
    ScrollTrigger.create({
      trigger: "#header-wrapper",
      start: "top -150px",
      onEnter: () => {
        const headerWrapper = document.getElementById("header-wrapper");
        headerWrapper.classList.add("fixed-header");

        // set opacity 0
        gsap.set(headerWrapper, { opacity: 0 });

        // Add a GSAP Tween to animate opacity from 0 to 1
        gsap.to(headerWrapper, { opacity: 1, duration: 0.5 });
      },
      onLeaveBack: () => {
        const headerWrapper = document.getElementById("header-wrapper");
        headerWrapper.classList.remove("fixed-header");
      },
    });

    // Function to toggle menu icon
    const toggleMenuIcon = () => {
      setMenuOpen(!menuOpen);
    };

    // Function to toggle sidebar on mobile
    const toggleSidebar = () => {
      setSidebarOpen(!sidebarOpen);
    };

    const handleOverlayClick = () => {
      setSidebarOpen(false);
      setMenuOpen(false);
    };

    // Add event listeners when component mounts
    const menuToggleElement = document.querySelector(".menu-toggle");
    const mobileToggleElement = document.querySelector(".mobile-toggle");
    const navOverlayElement = document.querySelector(".nav-overlay");

    if (menuToggleElement && mobileToggleElement && navOverlayElement) {
      menuToggleElement.addEventListener("click", toggleMenuIcon);
      mobileToggleElement.addEventListener("click", toggleSidebar);
      navOverlayElement.addEventListener("click", handleOverlayClick);
    }

    // Clean up event listeners when component unmounts
    return () => {
      if (menuToggleElement && mobileToggleElement && navOverlayElement) {
        menuToggleElement.removeEventListener("click", toggleMenuIcon);
        mobileToggleElement.removeEventListener("click", toggleSidebar);
        navOverlayElement.removeEventListener("click", handleOverlayClick);
      }
    };
  }, [menuOpen, sidebarOpen]); // Dependencies ensure effect updates when state changes

  useEffect(() => {
    // Function to handle media query change
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
      // If not mobile view, close the sidebar
      if (!isMobileView) {
        setMenuOpen(false);
        setSidebarOpen(false);
      }
    };

    // Initial check on component mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up event listener when component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobileView]); // Re-run effect when isMobileView changes

  // Dynamic className names
  const navWrapperClassName = `nav-wrapper ${
    isMobileView ? "active-sidebar" : ""
  } ${sidebarOpen ? "open" : ""}`;
  const navOverlayClassName = `nav-overlay ${sidebarOpen ? "open" : ""}`;

  return (
    <header id="header-wrapper">
      <div className="custom-container remove-padding-vertical">
        <div className="nav-container">
          <div className="logo-wrapper">
            <a href="/" className="logo">
              <img src="img/logo/Logo.svg" alt="" />
            </a>
            <a href="/" className="name-logo">
              <img src="img/logo/Name_Logo.svg" alt="" />
            </a>
          </div>
          <div className="nav-bar">
            <div className={navWrapperClassName}>
              <div className="nav-wrapper-inner">
                <div className="menu-menu-container">
                  <ul id="menu-menu" className="menu">
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href="/about">About us</a>
                    </li>
                  </ul>
                </div>
                <div className="menu-menu-container">
                  <ul id="menu-menu" className="menu">
                    <li>
                      <a href="/challenges">Challenges</a>
                    </li>
                    <li>
                      <a href="/contact">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={navOverlayClassName}></div>
          </div>
          <div className="mobile-toggle">
            <div className={`menu-toggle ${menuOpen ? "change" : ""}`}>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
