import React, { Component } from 'react';

import './Nav.css';

const styles = {
    transition: 'background-color 500ms ease-out'
}

class Nav extends Component {
    state = {
        topPosition: ''
    }

    listenScrollEvent = e => {
        if (window.scrollY > 50) {
            this.setState({ topPosition: "scrollOn" });
        } else {
            this.setState({ topPosition: "" });
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent)
    }

    render() {
        return (
          <div className="container">
            <nav
              className={
                this.state.topPosition === "scrollOn"
                  ? "navbar fixed-top navbar-expand-md navbar-light bg-gradient"
                  : "navbar fixed-top navbar-expand-md navbar-light box-shadow-none"
              }
              style={{ ...styles }}
            >
              <div className="container">
                <a className="navbar-brand text-uppercase" href="#header">
                  Vadim Brieven
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarNavAltMarkup"
                  aria-controls="navbarNavAltMarkup"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div
                  className="collapse navbar-collapse justify-content-end"
                  id="navbarNavAltMarkup"
                >
                  <div className="navbar-nav">
                    <a className="nav-item nav-link active" href="#header">
                      Home <span className="sr-only">(current)</span>
                    </a>
                    <a className="nav-item nav-link" href="#experience">
                      Experiences
                    </a>
                    <a className="nav-item nav-link" href="#projects">
                      Projects
                    </a>
                    <a className="nav-item nav-link" href="#skills">
                      Skills
                    </a>
                    <a className="nav-item nav-link" href="#contact">
                      Contact
                    </a>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        );
    }
}

export default Nav;