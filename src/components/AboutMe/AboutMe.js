import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./AboutMe.css";

const AboutMe = () => {
  AOS.init();

  return (
    <section
      id="aboutme"
      className="row pl-4"
      data-aos="slide-right"
      data-aos-duration="2000"
    >
      <section className="col-12 col-md-3 col-lg-3 col-xl-2 pt-4 ml-md-5">
        <h3 className="section-title">About Me</h3>
        <img
          src="/images/JTProfile.jpg"
          className="img-thumbnail mb-3"
          alt="Judy Tan"
        />

        <div>
          <a
            href="https://github.com/jt0398"
            target="blank"
            className="icon text-info mr-3"
          >
            <i className="fab fa-github-square"></i>
          </a>
          <a
            href="https://github.com/jt0398"
            target="blank"
            className="text-info"
          >
            jt0398
          </a>
        </div>
        <div className="mb-3">
          <a
            href="https://linkedin.com/in/judysupleotan"
            target="blank"
            className="icon text-info mr-3"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://linkedin.com/in/judysupleotan"
            target="blank"
            className="text-info"
          >
            judysupleotan
          </a>
        </div>
      </section>
      <div className="col-12 col-md-7 col-lg-7 mt-md-4 mt-lg-4 pt-md-5 pr-5">
        <p>
          Full-stack web developer with experience developing applications in
          different platforms such as SharePoint, ASP.Net web applications, and
          imaging solutions.
        </p>

        <p>
          Skills in different web technologies including Javascript, React, Web
          API, Node.js, Express, MySQL as well as strength in analysis and
          problem solving.
        </p>

        <p>
          In my current role I successfully implemented an auto verify feature
          in imaging workflow which resulted in operational labor savings of
          15K. I am challenge-driven provide quality work, diligence, and
          believe in professional development. I am passionate about viewing
          programming challenges from diﬀerent perspectives and team
          collaboration to create user driven web applications.
        </p>

        <p>
          When I'm not working, you'll see me playing with my son. I also like
          to read, listen to music, watch movies and travel to different
          countries.
        </p>

        <p>
          <a
            href="https://www.youracclaim.com/badges/1763a0c5-e830-403e-92f3-a8ec4685db02/public_url"
            target="blank"
            className="icon text-info mr-3"
          >
            <i className="fab fa-aws"></i>
          </a>
          <a
            href="https://www.youracclaim.com/badges/1763a0c5-e830-403e-92f3-a8ec4685db02/public_url"
            target="blank"
            className="text-info"
          >
            Certified Solutions Architect – Associate
          </a>
        </p>
        <a
          href="/files/judytan.pdf"
          target="blank"
          className="btn btn-info mr-3 mt-3 text-white"
        >
          <i className="fas fa-download mr-2"></i> Download Resume
        </a>
      </div>
    </section>
  );
};

export default AboutMe;
