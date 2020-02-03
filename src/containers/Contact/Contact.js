import React, { Component } from 'react';

import './Contact.css';

class Contact extends Component {
    render() {
        return (
            <div id="contact">
                <div className="container">
                    <h3 className="section-title">Get in touch</h3>
                    <div className="icons">
                        <a href="mailto:vadim.brieven@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer">
                                <i className="far fa-envelope fa-2x mx-1 social-icon"></i>
                        </a>
                        <a href="tel:+32471601691"
                            target="_blank"
                            rel="noopener noreferrer">
                                <i className="fas fa-mobile-alt fa-2x mx-1 social-icon"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/vadim-brieven/"  
                            target="_blank"
                            rel="noopener noreferrer">
                                <i className="fab fa-linkedin-in fa-2x mx-1 social-icon"></i>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;