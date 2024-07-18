import React from "react";

const Footer = () => {
  return (
    <div>
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
                    <a href="#">Contact Us</a>
                  </li>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Terms of Use</a>
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
