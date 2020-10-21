import React, { Component } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import GitHubAPI from "../../utilities/gitHubAPI";
import "./Portfolio.css";

class Portfolio extends Component {
  state = { repos: [] };

  componentDidMount() {
    GitHubAPI.getRepos().then((response) => {
      this.setState({ repos: response });
    });
    AOS.init();
  }

  render() {
    const { repos } = this.state;

    return (
      <section id="portfolio" className="row pl-4 mt-4">
        <section className="col-12 pt-4 ml-md-5">
          <h3
            className="section-title"
            data-aos="fade-in"
            data-aos-duration="1500"
          >
            Portfolio
          </h3>
          <div className="row mr-1" id="repoList">
            {repos.map((repo) => {
              return (
                <div
                  className="col-md-3 p-0 border project"
                  data-aos="flip-right"
                  data-aos-duration="1500"
                  data-aos-delay="50"
                  key={repo.id}
                >
                  <a
                    href={repo.homepage ? repo.homepage : "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={"/images/" + repo.name + ".jpg"}
                      className="img-fluid"
                      alt={repo.name}
                      title={repo.name}
                    />
                    <h4 className="mb-0 pb-0">{repo.name}</h4>
                  </a>
                  <div className="ml-3 mr-4">{repo.description}</div>
                  <ul className="stack" id={"stack-" + repo.name}>
                    {repo.topics.map((topic) => (
                      <li key={topic.id}>{topic.name}</li>
                    ))}
                    <li className="mt-2">
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-github-square"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              );
            })}
          </div>
        </section>
      </section>
    );
  }
}

export default Portfolio;
