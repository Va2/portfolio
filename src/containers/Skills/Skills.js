import React, { Component } from 'react';

import './Skills.css';

class Skills extends Component {
    render() {
        return (
            <section id="skills">
                <ul>
                    <li>
                        <h3>HTML <span className="float-right percent">95%</span><span className="bar"><span className="html"></span></span></h3>
                    </li>
                    <li>
                        <h3>CSS / Sass <span className="float-right percent">95%</span><span className="bar"><span className="css"></span></span></h3>
                    </li>
                    <li>
                        <h3>Bootstrap <span className="float-right percent">90%</span><span className="bar"><span className="bootstrap"></span></span></h3>
                    </li>
                    <li>
                        <h3>JavaScript <span className="float-right percent">60%</span><span className="bar"><span className="js"></span></span></h3>
                    </li>
                    <li>
                        <h3>ReactJS <span className="float-right percent">65%</span><span className="bar"><span className="react"></span></span></h3>
                    </li>
                    <li>
                        <h3>WordPress Dev <span className="float-right percent">80%</span><span className="bar"><span className="wp"></span></span></h3>
                    </li>
                    <li>
                        <h3>PHP <span className="float-right percent">50%</span><span className="bar"><span className="php"></span></span></h3>
                    </li>
                    <li>
                        <h3>SQL & MySQL <span className="float-right percent">45%</span><span className="bar"><span className="mysql"></span></span></h3>
                    </li>
                    <li>
                        <h3>Git & GitHub <span className="float-right percent">50%</span><span className="bar"><span className="git"></span></span></h3>
                    </li>
                </ul>
            </section>
        );
    }
}

export default Skills;