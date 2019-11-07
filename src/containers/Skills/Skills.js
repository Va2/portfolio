import React, { Component } from 'react';
import $ from "jquery";

import './Skills.css';

class Skills extends Component {
    componentDidMount() {
        var lang = {
          html: "95%",
          css: "95%",
          bootstrap: "90%",
          javascript: "60%",
          react: "65%",
          php: "55%",
          git: "50%"
        };

        var multiply = 4;

        $.each(lang, function(language, pourcent) {
          var delay = 700;

          setTimeout(function() {
            $("#" + language + "-pourcent").html(pourcent);
          }, delay * multiply);

          multiply++;
        });
    }

    render() {
        return (
            // <section id="skills">
                <ul class="skills-bar-container">
                    <li>
                        <div class="progressbar-title">
                            <h3>HTML</h3>
                            <span class="percent" id="html-pourcent"></span>
                        </div>
                        <div class="bar-container">
                            <span
                                class="progressbar progressorange"
                                id="progress-html"
                            ></span>
                        </div>
                    </li>
                    <li>
                        <div class="progressbar-title">
                            <h3>CSS / SASS</h3>
                            <span class="percent" id="css-pourcent"></span>
                        </div>
                        <div class="bar-container">
                            <span
                                class="progressbar progresspink"
                                id="progress-css"
                            ></span>
                        </div>
                    </li>
                    <li>
                        <div class="progressbar-title">
                            <h3>Bootstrap</h3>
                            <span class="percent" id="bootstrap-pourcent"></span>
                        </div>
                        <div class="bar-container">
                            <span
                                class="progressbar progresspurpleBS"
                                id="progress-bootstrap"
                            ></span>
                        </div>
                    </li>

                    <li>
                        <div class="progressbar-title">
                            <h3>JavaScript</h3>
                            <span class="percent" id="javascript-pourcent"></span>
                        </div>
                        <div class="bar-container">
                            <span
                                class="progressbar progressyellow"
                                id="progress-javascript"
                            ></span>
                        </div>
                    </li>

                    <li>
                        <div class="progressbar-title">
                            <h3>ReactJS</h3>
                            <span class="percent" id="react-pourcent"></span>
                        </div>
                        <div class="bar-container">
                            <span
                                class="progressbar progressblue"
                                id="progress-react"
                            ></span>
                        </div>
                    </li>

                    <li>
                        <div class="progressbar-title">
                            <h3>PHP</h3>
                            <span class="percent" id="php-pourcent"></span>
                        </div>
                        <div class="bar-container">
                            <span
                                class="progressbar progresspurple"
                                id="progress-php"
                            ></span>
                        </div>
                    </li>

                    <li>
                        <div class="progressbar-title">
                            <h3>Git & GitHub</h3>
                            <span class="percent" id="git-pourcent"></span>
                        </div>
                        <div class="bar-container">
                            <span
                                class="progressbar progressgit"
                                id="progress-git"
                            ></span>
                        </div>
                    </li>
                </ul>
            /* </section> */
        );
    }
}

export default Skills;