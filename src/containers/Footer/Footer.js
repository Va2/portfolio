import React, { Component } from 'react';

import './Footer.css';

class Footer extends Component {
    render() {
        return (
          <footer>
            <p>
              Copyright &copy; All rights reserved | Developed
              with <span className="heart"></span> by{" "}
              <a
                href="https://be.linkedin.com/in/vadim-brieven/en"
                target="_blank"
                rel="noopener noreferrer"
              >
                Vadim Brieven
              </a>
            </p>
          </footer>
        );
    }
}

export default Footer;