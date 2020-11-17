import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Skills = () => {
  AOS.init();

  return (
    <section id="skills" className="row pl-4 mt-4 bg-info text-white">
      <section
        className="col pt-4 ml-md-5"
        data-aos="fade-down"
        data-aos-duration="2500"
      >
        <h3 className="section-title">Skills</h3>

        <table className="table w-75 w-md-25 text-light">
          <tbody>
            <tr>
              <th className="h5 text-center">Front-End</th>
              <th className="h5 text-center">Back-End</th>
            </tr>
            <tr>
              <td className="text-center">
                <p className="p-2">
                  <i className="fab fa-html5 icon d-block"></i> HTML 5
                </p>
                <p className="p-2">
                  <i className="fab fa-css3-alt icon d-block"></i>CSS3
                </p>
                <p className="p-2">
                  <i className="fab fa-js-square icon d-block"></i>Javascript
                </p>
                <p className="p-2">
                  <i className="fab fa-react icon d-block"></i>React
                </p>
              </td>
              <td className="text-center">
                <p className="p-2">C#</p>
                <p className="p-2">ASP.Net</p>
                <p className="p-2">
                  <i className="fas fa-database icon d-block"></i>SQL
                  Server/MySQL/MongoDB
                </p>
                <p className="p-2">
                  <i className="fab fa-node-js icon d-block"></i>Node.js
                </p>
                <p className="p-2">Express</p>
                <p className="p-2">RESTful API</p>
                <p className="p-2">
                  <i class="fab fa-python icon d-block"></i>Python
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </section>
  );
};

export default Skills;
