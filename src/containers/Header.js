import React from 'react';
import Typed from 'react-typed';

import './Header.css';

import DevicesImg from '../assets/img/responsive-devices.png';

const Header = () => {
    return (
      <section className="bg-header">
            <div className="container vh-100 d-flex h-100">
                <div className="row justify-content-center align-self-center">
                    {/* COL 1 */}
                    <div className="col-md-6">
                        <img src={DevicesImg} className="img-fluid" alt="Responsive devices" />
                    </div>

                    {/* COL 2 */}
                    <div className="col-md-6 align-self-center">
                        <h2>
                        I am a Web Developer <br />
                        & I love to{" "}
                        <Typed
                            strings={[
                            "write clean code.",
                            "discover new possibilities.",
                            "create new functionalities.",
                            "challenge myself."
                            ]}
                            typeSpeed={30}
                            backSpeed={45}
                            loop
                        />
                        </h2>
                    </div>
                </div>
            </div>
      </section>
    );
}

export default Header;