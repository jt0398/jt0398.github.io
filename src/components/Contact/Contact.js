import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  AOS.init();

  return (
    <section id="contact" className="row pl-4 mt-4 bg-info text-white">
      <section
        className="col-12 pt-4 ml-md-5 pb-5"
        data-aos="slide-right"
        data-aos-duration="1500"
      >
        <h3 className="section-title">Contact</h3>

        <p>
          <i className="far fa-envelope text-white"></i>
          <a href="mailto:judysupleo@gmail.com" className="text-white ml-3">
            judy.supleo@gmail.com
          </a>
        </p>
        <p>
          <i className="fab fa-github-square"></i>
          <a
            href="https://github.com/jt0398"
            target="blank"
            rel="noopener noreferrer"
            className="text-white ml-3"
          >
            jt0398
          </a>
        </p>
        <p>
          <i className="fab fa-linkedin"></i>
          <a
            href="https://linkedin.com/in/judysupleotan"
            target="blank"
            rel="noopener noreferrer"
            className="text-white ml-3"
          >
            judysupleotan
          </a>
        </p>
      </section>
    </section>
  );
};

export default Contact;
