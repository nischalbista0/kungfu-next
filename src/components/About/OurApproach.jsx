import React from "react";

const OurApproach = () => {
  return (
    <section className="our-approach">
      <div className="custom-container remove-padding-top">
        <div className="approach-container center">
          <div className="container-title">
            <h2>Our Approach</h2>
          </div>
          <div className="common-card-container">
            <div className="common-card">
              <div className="card-section">
                <div className="card-image">
                  <div className="image-container">
                    <img src="img/static/About_Approach01.svg" alt="" />
                  </div>
                </div>
                <div className="card-title">
                  <h2>Fun-tastic Learning Zone</h2>
                </div>
                <div className="card-content">
                  <p>
                    Kungfu Quiz transforms traditional learning with interactive
                    quizzes, making learning as engaging as playing one&apos;s
                    favorite game.
                  </p>
                </div>
              </div>
            </div>
            <div className="common-card">
              <div className="card-section">
                <div className="card-image">
                  <div className="image-container">
                    <img src="img/static/About_Approach02.svg" alt="" />
                  </div>
                </div>
                <div className="card-title">
                  <h2>Learning Opportunities for All</h2>
                </div>
                <div className="card-content">
                  <p>
                    Our platform is designed for global access, fostering a
                    diverse and dynamic learning environment where everyone can
                    excel.
                  </p>
                </div>
              </div>
            </div>
            <div className="common-card">
              <div className="card-section">
                <div className="card-image">
                  <div className="image-container">
                    <img src="img/static/About_Approach03.svg" alt="" />
                  </div>
                </div>
                <div className="card-title">
                  <h2>Backed up by our Advanced Pedagogy</h2>
                </div>
                <div className="card-content">
                  <p>
                    Built on a foundation of our advanced pedagogy approach,
                    Kungfu Quiz goes beyond memorisation. Our approach fosters a
                    true understanding of the material.
                  </p>
                </div>
              </div>
            </div>
            <div className="common-card">
              <div className="card-section">
                <div className="card-image">
                  <div className="image-container">
                    <img src="img/static/Contact_Connect.svg" alt="" />
                  </div>
                </div>
                <div className="card-title">
                  <h2>Personalised Learning Experience</h2>
                </div>
                <div className="card-content">
                  <p>
                    With Kungfu Quiz, learning feels less like a task and more
                    like an exciting adventure. Create challenges that cater to
                    individual learning styles and paces.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="custom-container">
        <div className="section-container type-small center">
          <div className="section-title">
            <h1>Make learning fun with Kungfu Quiz </h1>
          </div>
          {/* <div className="section-body">
            <p>
              Integrate a fun way of learning with our interactive quizzes and
              set challenges to encourage your squad to achieve more.
            </p>
          </div> */}
          <div className="section-link">
            <a href="#" className="co-btn">
              <span>Learn More</span>
            </a>
          </div>
        </div>
      </div>

      <div
        style={{
          height: "50vh",
        }}
      ></div>
    </section>
  );
};

export default OurApproach;
