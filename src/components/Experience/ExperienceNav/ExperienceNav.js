import React from 'react';

import './ExperienceNav.css'

const ExperienceNav = (props) => {
    return (
      <div className="col-lg-4 text-center d-flex mt-4">
        <button
          disabled={props.currentIndex <= 0}
          onClick={() => props.prevXp()}
        >
          <i className="fas fa-chevron-left" />
        </button>

        <ul className="m-auto pl-0">
          <li className={props.currentIndex === 0 ? "active" : ""}>2019</li>
          <li className={props.currentIndex === 1 ? "active" : ""}>2018</li>
          <li className={props.currentIndex === 2 ? "active" : ""}>2018</li>
          <li className={props.currentIndex === 3 ? "active" : ""}>2017</li>
          <li className={props.currentIndex === 4 ? "active" : ""}>2012</li>
        </ul>

        <button
          disabled={props.currentIndex == props.maxIndex - 1}
          onClick={() => props.nextXp()}
        >
          <i className="fas fa-chevron-right" />
        </button>

        {/* <img
          className="logo img-fluid d-none d-md-inline"
          src={props.logo}
          alt="MolenGeek | Coding School training"
        /> */}
      </div>
    );
}

export default ExperienceNav;