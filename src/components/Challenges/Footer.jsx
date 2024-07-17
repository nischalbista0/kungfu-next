import React from "react";

const Footer = () => {
  return (
    <>
      <div class="big-cloud-container">
        <div class="left-pillar">
          <img src="/img/static/challenges-pillar-left.png" alt="Pillar" />
        </div>

        <div class="right-pillar">
          <img src="/img/static/challenges-pillar-right.png" alt="Pillar" />
        </div>

        <div class="panda-with-boat-container" id="panda-with-boat-container">
          <div class="background">
            <div class="wave">
              <svg
                class="waves"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 24 150 28"
                preserveAspectRatio="none"
                shape-rendering="auto"
              >
                <defs>
                  <path
                    id="gentle-wave"
                    d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                  />
                </defs>
                <g class="parallax">
                  <path
                    id="gentle-wave"
                    d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                    fill="#63C9E9"
                  />
                  {/* <use xlink:href="#gentle-wave" x="48" y="0" fill="#63C9E9" /> */}
                </g>
              </svg>
            </div>
          </div>

          <div class="panda-with-boat" id="panda-with-boat">
            <img src="/img/static/panda-boat.png" alt="Panda with boat" />

            <div class="boat-dragon-head">
              <img
                src="/img/static/boat-dragon-head.png"
                alt="Panda with boat"
              />
            </div>
          </div>
        </div>

        <div class="image-container cloudbig" id="cloudbig">
          <img src="img/static/Footer_Cloud.svg" alt="Footer Cloud" />
        </div>
      </div>

      <footer id="footer-wrapper-type-border">
        <div class="custom-container">
          <div class="footer-widget-container">
            <div class="footer-widget">
              <div class="logo-container">
                <a href="#">
                  <img src="img/logo/Logo_Footer.svg" alt="" />
                </a>
              </div>
            </div>
            <div class="footer-widget">
              <div class="widget-content">
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
            <div class="footer-widget">
              <div class="social-widgets">
                <ul>
                  <li>
                    <a
                      href="https://www.facebook.com"
                      target="_blank"
                      rel="nofollow"
                    >
                      <div class="image-container">
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
                      <div class="image-container">
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
                      <div class="image-container">
                        <img
                          src="img/icons/icon-twitter.svg"
                          alt="Twitter logo"
                        />
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="widget-content">
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
