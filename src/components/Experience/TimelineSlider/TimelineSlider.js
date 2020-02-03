import React, { Component } from 'react';

import './TimelineSlider.css';

class TimelineSlider extends Component {
    render() {
        return (
          <section id="experience">
            <div className="container-fluid">
              <div className="row">
                <h3 className="section-title">Experience & Education</h3>

                <div className="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2 mg-x-center">
                  <ul className="timeline timeline-centered">
                    <li className="timeline-item">
                      <div className="timeline-info">
                        <span>August 2019</span>
                      </div>
                      <div className="timeline-marker"></div>
                      <div className="timeline-content">
                        <h4 className="timeline-title">
                          "Swimming-pool" trainee
                          <br />@{" "}
                          <a
                            href="https://www.s19.be/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            S19 Coding School
                          </a>
                        </h4>
                        <p>
                          I've been following the “swimming-pool” at S19 Coding
                          School, which is working for a month 24/7. During this
                          month you learn Shell languages and C language. Then
                          you have daily challenges to achieve. Like for example
                          reproducing any kind of function of the C language
                          without using other functions or being limited to 1 or
                          2 function(s).
                        </p>
                      </div>
                    </li>
                    <li className="timeline-item">
                      <div className="timeline-info">
                        <span>December 2018 - July 2019</span>
                      </div>
                      <div className="timeline-marker"></div>
                      <div className="timeline-content">
                        <h4 className="timeline-title">
                          Web & Mobile developer trainee
                          <br />@{" "}
                          <a
                            href="https://molengeek.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            MolenGeek
                          </a>
                        </h4>
                        <p>
                          The 6-month training at MolenGeek allowed me to go
                          much deeper into the languages and technologies I
                          learned during my other internships and training. I
                          was able to develop more fictitious projects and these
                          were much more successful. I then extended the
                          training by one month in order to discover the ReactJS
                          library by developing various small projects (visible
                          on my GitHub account) such as a Todo list and my
                          portfolio.
                        </p>
                      </div>
                    </li>
                    <li className="timeline-item">
                      <div className="timeline-info">
                        <span>April - July 2018</span>
                      </div>
                      <div className="timeline-marker"></div>
                      <div className="timeline-content">
                        <h4 className="timeline-title">
                          Web Developer intern
                          <br />@{" "}
                          <a
                            href="https://www.zapfloorhq.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            ZapFloorHQ
                          </a>
                        </h4>
                        <p>
                          ZapFloorHQ is a Startup based in Antwerp and
                          developing a platform allowing coworking/business
                          center managers to run their business more efficiently
                          and increase revenue. My mission during my internship
                          was to upgrade their One Pager website from Bootstrap3
                          to Bootstrap4. I then had to create a Multisite
                          WordPress theme and develop new pages (Jobs, Blog &
                          Contact).
                        </p>
                      </div>
                    </li>
                    <li className="timeline-item">
                      <div className="timeline-info">
                        <span>September 2017 - July 2018</span>
                      </div>
                      <div className="timeline-marker"></div>
                      <div className="timeline-content">
                        <h4 className="timeline-title">
                          Web & Mobile Developer trainee
                          <br />@{" "}
                          <a
                            href="https://becode.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            BeCode
                          </a>
                        </h4>
                        <p>
                          BeCode is a Belgian coding school powered by Simplon
                          (for a 7 months period). This is where I had my first
                          professional experience in the field of web & mobile
                          development. I learned new technical skills as well as
                          soft-skills. This is also where I did my first group
                          projects to learn how to work with Git & GitHub.
                        </p>
                      </div>
                    </li>
                    <li className="timeline-item">
                      <div className="timeline-info">
                        <span>August 2013 - July 2017</span>
                      </div>
                      <div className="timeline-marker"></div>
                      <div className="timeline-content">
                        <h4 className="timeline-title">
                          Administrative and accounting tasks
                          <br />@ Quartier Latin
                        </h4>
                        <p>
                          Thanks to my knowledge of languages and my rigour, I
                          worked for several years in a business centre. My
                          tasks there were very diverse, ranging from client
                          management (contract, mail, telephone, e-mail,
                          meetings) to accounting (invoicing, reminders, role
                          excerpts...) and more.
                        </p>
                      </div>
                    </li>
                    <li className="timeline-item">
                      <div className="timeline-info">
                        <span>2009 - 2013</span>
                      </div>
                      <div className="timeline-marker"></div>
                      <div className="timeline-content">
                        <h4 className="timeline-title">
                          Photography studies
                          <br />@{" "}
                          <a
                            href="https://www.inraci.be/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            INRACI
                          </a>
                        </h4>
                        <p>
                          It was during my last year of photography study at
                          INRACI that I discovered my first web languages, such
                          as HTML and CSS. For my graduation work I had to
                          create a (basic) website to present my different
                          themes and my photographs. It is also during these
                          studies that I learned to use the Adobe suite,
                          especially Photoshop, InDesign & Illustrator.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        );
    }
}

export default TimelineSlider;