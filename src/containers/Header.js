import React from 'react';
import Typed from 'react-typed';

import './Header.css';

import DevicesImg from '../assets/img/responsive-devices.png';

const Header = () => {
    return (
      <header id="header" className="bg-header">
            <div className="container vh-100 d-flex h-100">
                <div className="row justify-content-center align-self-center">
                    {/* COL 1 */}
                    <div className="col-md-6">
                        <img src={DevicesImg} className="img-fluid" alt="Responsive devices" />
                    </div>

                    {/* COL 2 */}
                    <div className="col-md-6 align-self-center">
                        <h1>Web Developer</h1>
                        <h2>
                            I love to{" "}
                            <Typed
                                strings={[
                                "write clean code.",
                                "discover new possibilities.",
                                "create new functionalities.",
                                "challenge myself."
                                ]}
                                typeSpeed={55}
                                backSpeed={45}
                                loop
                            />
                        </h2>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="mx-auto social-icons">
                        <a href="#">
                            <i className="fab fa-linkedin fa-2x mx-1 social-icon"></i>
                        </a>
                        <a href="#">
                            <i className="fab fa-github-square fa-2x mx-1 social-icon"></i>
                        </a>
                        <a href="#">
                            <i className="fab fa-twitter-square fa-2x mx-1 social-icon"></i>
                        </a>
                    </div>
                </div>
            </div>
      </header>
    );
}

export default Header;