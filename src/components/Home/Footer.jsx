import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";

const Footer = () => {
  const pillarSmallRef = useRef(null);
  const pillarBigRef = useRef(null);
  const cloudBigRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Parallax effect for pillar-right-small
    gsap.to(pillarSmallRef.current, {
      yPercent: 40, // Adjust the value for desired parallax effect
      scale: 0.8,
      ease: "none",
      scrollTrigger: {
        trigger: pillarSmallRef.current,
        start: "top bottom", // Start when the top of the element hits the bottom of the viewport
        end: "bottom top", // End when the bottom of the element hits the top of the viewport
        scrub: 4,
        yoyo: true,
      },
    });

    // Parallax effect for pillar-right-big
    gsap.to(pillarBigRef.current, {
      yPercent: -20, // Adjust the value for desired parallax effect
      scale: 1.2,
      ease: "none",
      scrollTrigger: {
        trigger: pillarSmallRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 4,
        yoyo: true,
      },
    });

    // Parallax effect for big cloud
    gsap.set(cloudBigRef.current, { y: 0 });
    gsap.to(cloudBigRef.current, {
      y: 90,
      scrollTrigger: {
        trigger: cloudBigRef.current,
        start: "top bottom", // Adjust this value to trigger at the correct position
        end: "bottom top",
        scrub: 5,
        // markers: true,
      },
    });
  }, []);

  return (
    <div>
      <div className="pillar_container">
        <div className="pillar-left">
          <img
            src="img/static/footer-pillar-right.png"
            alt="Pillar"
            className="pillarbig"
            ref={pillarBigRef}
          />
        </div>

        <div className="mountain-tree">
          <img src="img/static/mountain-and-tree.png" alt="Mountain Tree" />
        </div>

        <div className="pillar-right">
          <img
            src="img/static/pillar-right-small.png"
            alt="Pillar"
            className="pillar-right-small pillarsmall"
            ref={pillarSmallRef}
          />
          <img
            src="img/static/pillar-right-big.png"
            alt="Pillar"
            className="pillar-right-big pillarbig"
            ref={pillarBigRef}
          />
        </div>
      </div>

      <div className="big-cloud-container">
        <div
          className="image-container cloudbig"
          id="cloudbig"
          ref={cloudBigRef}
        >
          <img src="img/static/Footer_Cloud.svg" alt="Footer Cloud" />
        </div>
      </div>

      <footer id="footer-wrapper-type-border">
        <div className="custom-container">
          <div className="footer-widget-container">
            <div className="footer-widget">
              <div className="logo-container">
                <a href="#">
                  <img src="img/logo/Logo_Footer.svg" alt="" />
                </a>
              </div>
            </div>
            <div className="footer-widget">
              <div className="widget-content">
                <ul>
                  <li>
                    <a href="<?php echo site_url(); ?>/team/a-team/">
                      Classroom Courses
                    </a>
                  </li>
                  <li>
                    <a href="#">Virtual Classroom Courses</a>
                  </li>
                  <li>
                    <a href="#">E-Learning Courses</a>
                  </li>
                  <li>
                    <a href="#">Video Courses</a>
                  </li>
                  <li>
                    <a href="#">Offline Courses</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-widget">
              <div className="social-widgets">
                <ul>
                  <li>
                    <a
                      href="https://www.facebook.com"
                      target="_blank"
                      rel="nofollow"
                    >
                      <div className="image-container">
                        <img
                          src="img/icons/icon-facebook.svg"
                          alt="Facebook logo"
                        />
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com"
                      target="_blank"
                      rel="nofollow"
                    >
                      <div className="image-container">
                        <img
                          src="img/icons/icon-instagram.svg"
                          alt="Instagram logo"
                        />
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com"
                      target="_blank"
                      rel="nofollow"
                    >
                      <div className="image-container">
                        <img
                          src="img/icons/icon-twitter.svg"
                          alt="Twitter logo"
                        />
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="widget-content">
                <p>&copy; copyright Kungfuquiz 2024.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
