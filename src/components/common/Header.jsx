import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect, useState, useRef } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const menuToggleRef = useRef(null);
  const mobileToggleRef = useRef(null);
  const navOverlayRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const toggleMenuIcon = () => {
      setMenuOpen(!menuOpen);
    };

    const toggleSidebar = () => {
      setSidebarOpen(!sidebarOpen);
    };

    const handleNavOverlayClick = () => {
      setSidebarOpen(false);
      setMenuOpen(false);
    };

    const menuToggle = menuToggleRef.current;
    const mobileToggle = mobileToggleRef.current;
    const navOverlay = navOverlayRef.current;

    if (menuToggle) {
      menuToggle.addEventListener("click", toggleMenuIcon);
    }

    if (mobileToggle) {
      mobileToggle.addEventListener("click", toggleSidebar);
    }

    if (navOverlay) {
      navOverlay.addEventListener("click", handleNavOverlayClick);
    }

    // Clean up event listeners when component unmounts
    return () => {
      if (menuToggle) {
        menuToggle.removeEventListener("click", toggleMenuIcon);
      }

      if (mobileToggle) {
        mobileToggle.removeEventListener("click", toggleSidebar);
      }

      if (navOverlay) {
        navOverlay.removeEventListener("click", handleNavOverlayClick);
      }
    };
  }, [menuOpen, sidebarOpen]); // Dependencies ensure effect updates when state changes

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
      if (!isMobileView) {
        setMenuOpen(false);
        setSidebarOpen(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobileView]);

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
            <div className={navWrapperClassName} ref={navOverlayRef}>
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
            <div className={navOverlayClassName} ref={mobileToggleRef}></div>
          </div>
          <div className="mobile-toggle" ref={menuToggleRef}>
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
