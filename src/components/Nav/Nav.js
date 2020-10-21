import React, { Component } from "react";
import "./Nav.css";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollY: 0,
      navClassName: "navbar fixed-top navbar-expand-md navbar-dark border-0",
    };

    this.navItems = [
      { id: 1, url: "#aboutme", label: "About Me" },
      { id: 2, url: "#skills", label: "Skills" },
      { id: 3, url: "#portfolio", label: "Portfolio" },
      { id: 4, url: "#contact", label: "Contact" },
    ];
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    this.setState({
      scrollY: window.pageYOffset,
    });

    if (this.state.scrollY < 175)
      this.setState({
        navClassName: "navbar fixed-top navbar-expand-md navbar-dark border-0",
      });
    else
      this.setState({
        navClassName:
          "navbar fixed-top navbar-expand-md navbar-light bg-light border-0",
      });
  };

  render() {
    return (
      <nav className={this.state.navClassName}>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navMenu"
          aria-controls="navMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav mr-auto ml-3 mt-2 mt-md-0">
            {this.navItems.map((item) => (
              <li className="nav-item" key={item.id}>
                <a href={item.url} className="nav-link">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
