import React, { Component } from 'react';

import './Nav.css';

const styles = {
    transition: 'background-color 500ms ease-out'
}

class Nav extends Component {
    state = {
        bgColor: ''
    }

    listenScrollEvent = e => {
        if (window.scrollY > 50) {
            this.setState({ bgColor: 'white' })
        } else {
            this.setState({ bgColor: '' })
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
                        this.state.bgColor === "white"
                        ? "navbar fixed-top navbar-expand-md navbar-light bg-white shadow-sm"
                        : "navbar fixed-top navbar-expand-md navbar-light"
                    }
                    style={{ ...styles }}
                >
                    <a className="navbar-brand text-uppercase" /*href="#"*/>
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
                </nav>

            </div>
        );
    }
}

export default Nav;