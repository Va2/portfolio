import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';

class Nav extends Component {
    state = {
        bgColor: ''
    }

    listenScrollEvent = e => {
        if (window.scrollY > 50) {
            setTimeout(() => {
                this.setState({ bgColor: 'white' })
            }, 500);
        } else {
            setTimeout(() => {
                this.setState({ bgColor: '' })
            }, 500);
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent)
    }

    render() {
        return (
            <nav
                className={
                    this.state.bgColor === "white"
                    ? "navbar fixed-top navbar-expand-md navbar-light px-5 shadow-sm"
                    : "navbar fixed-top navbar-expand-md navbar-light px-5"
                }
                style={{ backgroundColor: this.state.bgColor }}
            >
                <a className="navbar-brand" href="#">
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
                    className="collapse navbar-collapse justify-content-center"
                    id="navbarNavAltMarkup"
                >
                    <div className="navbar-nav">
                    <a className="nav-item nav-link active" href="#">
                        Home <span className="sr-only">(current)</span>
                    </a>
                    <a className="nav-item nav-link" href="#">
                        Experiences
                    </a>
                    <a className="nav-item nav-link" href="#">
                        Projects
                    </a>
                    <a className="nav-item nav-link" href="#">
                        Skills
                    </a>
                    <a className="nav-item nav-link" href="#">
                        Contact
                    </a>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Nav;