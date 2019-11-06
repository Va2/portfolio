import React, { Component } from 'react';
import Typed from 'react-typed';

import "./LogoSlider.css";

// SVG images
import bootstrapSVG from "../../assets/img/bootstrap-solid.svg";
import javascriptSVG from '../../assets/img/javascript.svg';
import reactSVG from '../../assets/img/iconfinder_React.js_logo_1174949.svg';
import npmSVG from '../../assets/img/npm-logo-red.svg';
import webpackSVG from '../../assets/img/webpack.svg';
import phpSVG from '../../assets/img/php.svg';
import photoshopSVG from '../../assets/img/photoshop.svg';

// PNG images
import vscodePNG from '../../assets/img/visual-studio-code-icon.png';
import cssPNG from '../../assets/img/css3.png';
import sassPNG from '../../assets/img/sass.png';
import gruntPNG from '../../assets/img/grunt.png';
import wordpressPNG from '../../assets/img/WordPress.png';
import mysqlPNG from '../../assets/img/mysql.png';
import mariaDBPNG from '../../assets/img/maria-db.png';
import mampPNG from '../../assets/img/mamp.png';
import adobeXDPNG from '../../assets/img/adobeXD.png';

class LogoSlider extends Component {
    render() {
        return (
            <section class="slider-container">
                <div className="h4-container">
                    <h4>
                        I like to use following{" "}
                        <Typed
                            strings={[
                            "languages",
                            "frameworks",
                            "libraries",
                            "tools"
                            ]}
                            typeSpeed={65}
                            backSpeed={55}
                            loop
                        />
                    </h4>
                </div>
                <div className="slider">
                    <div class="slide-track">
                        <div class="slide">
                            <img className="resize-logo" src={vscodePNG} alt="Visual Studio Code editor" />
                        </div>
                        <div class="slide">
                            <img className="resize-npm-logo" src={npmSVG} alt="NPM - Node Package Manager" />
                        </div>
                        <div class="slide">
                            <img className="resize-logo" src={webpackSVG} alt="Webpack" />
                        </div>
                        <div class="slide">
                            <img className="resize-logo" src={gruntPNG} alt="Grunt" />
                        </div>
                        <div class="slide">
                                <img src="https://www.w3.org/html/logo/badge/html5-badge-h-css3-semantics.png" width="123.75" height="48" alt="HTML5 Powered with CSS3 / Styling, and Semantics" title="HTML5 Powered with CSS3 / Styling, and Semantics" />
                        </div>
                        <div class="slide">
                            <img className="resize-css-logo" src={cssPNG} alt="CSS3 - Cascading Style Sheet" />
                        </div>
                        <div class="slide">
                            <img className="resize-logo" src={bootstrapSVG} alt="Bootstrap Build responsive, mobile-first projects on the web with the world’s most popular front-end component library." />
                        </div>
                        <div class="slide">
                            <img className="resize-logo" src={sassPNG} alt="Sass" />
                        </div>
                        <div class="slide">
                            <img className="resize-logo" src={javascriptSVG} alt="JavaScript" />
                        </div>
                        <div class="slide">
                            <img className="resize-logo" src={reactSVG} alt="React JS" />
                        </div>
                        <div class="slide">
                            <img className="resize-wp-logo" src={wordpressPNG} alt="WordPress Theme and Plugin Development" />
                        </div>
                        <div class="slide">
                            <img className="resize-php-logo" src={phpSVG} alt="PHP" />
                        </div>
                        <div class="slide">
                            <img className="resize-logo" src={mariaDBPNG} alt="Maria DB (database)" />
                        </div>
                        <div class="slide">
                            <img className="resize-logo" src={mysqlPNG} alt="MySQL database" />
                        </div>
                        <div class="slide">
                            <img className="resize-logo" src={mampPNG} alt="MAMP" />
                        </div>
                        <div class="slide">
                            <img className="resize-logo" src={adobeXDPNG} alt="Adobe XD" />
                        </div>
                        <div class="slide">
                            <img className="resize-logo" src={photoshopSVG} alt="Adobe Photoshop" />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default LogoSlider;
