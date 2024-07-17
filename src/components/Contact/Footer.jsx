import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect } from "react";

const Footer = () => {
  gsap.registerPlugin(useGSAP);

  useEffect(() => {
    gsap.to(".boat-dragon-head", {
      rotation: 6,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    const cloudbig = gsap.utils.toArray(".cloudbig");
    gsap.set(cloudbig, { y: 0 });
    cloudbig.forEach((box) => {
      gsap.to(box, {
        y: 90,
        scrollTrigger: {
          trigger: box,
          scrub: 5,
          start: "top 100%",
          end: "bottom",
        },
      });
    });
  }, []);

  return (
    <>
      <div className="all-pillars-container">
        <div className="all-pillars">
          <img src="img/static/all-pillars.png" alt="Pillars" />
        </div>

        <div className="mountain-tree">
          <img src="img/static/mountain-and-tree.png" alt="Mountain Tree" />
        </div>
      </div>

      <div className="big-cloud-container">
        <div className="image-container cloudbig" id="cloudbig">
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
    </>
  );
};

export default Footer;
