import React, { Component } from 'react';

import MolenGeekLogo from '../../assets/img/molengeek-logo.png';
import ZapFloorHqLogo from '../../assets/img/zap-floor-hq-logo.png';

import './Experience.css';
import ExperienceInfo from '../../components/Experience/ExperienceInfo';
import ExperienceNav from '../../components/Experience/ExperienceNav';

const experiences = [
    {
        monthAndYear: 'Jun 2019 - Jul 2019',
        logoUrl: MolenGeekLogo,
        jobStatus: 'Web & Mobile developer intern',
        company: 'MolenGeek',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi provident numquam eveniet quas animi? Commodi labore blanditiis asperiores, quaerat itaque eligendi excepturi nulla assumenda, aliquam facilis explicabo quibusdam obcaecati sapiente?'
    },
    {
        monthAndYear: 'Dec 2018 - june 2019',
        logoUrl: MolenGeekLogo,
        jobStatus: 'Web & Mobile developer trainee',
        company: 'MolenGeek',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi provident numquam eveniet quas animi? Commodi labore blanditiis asperiores, quaerat itaque eligendi excepturi nulla assumenda, aliquam facilis explicabo quibusdam obcaecati sapiente?'
    },
    {
        monthAndYear: 'Apr 2018 - Jul 2018',
        logoUrl: ZapFloorHqLogo,
        jobStatus: 'Web Developer intern',
        company: 'ZapFloorHQ',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi provident numquam eveniet quas animi? Commodi labore blanditiis asperiores, quaerat itaque eligendi excepturi nulla assumenda, aliquam facilis explicabo quibusdam obcaecati sapiente?'
    }
]

let currentIndex;

class Experience extends Component {
    constructor(props) {
        super(props);
        currentIndex = 0;
        // console.log(currentIndex);
        
        this.state = {
            monthAndYear: experiences[currentIndex].monthAndYear,
            logoUrl: experiences[currentIndex].logoUrl,
            company: experiences[currentIndex].company,
            jobStatus: experiences[currentIndex].jobStatus,
            description: experiences[currentIndex].description
        }
    }
     
    nextExperienceHandler = () => {
        currentIndex = currentIndex + 1;
        if (currentIndex < experiences.length) {
            // console.log(currentIndex);
            this.setState({
                monthAndYear: experiences[currentIndex].monthAndYear,
                logoUrl: experiences[currentIndex].logoUrl,
                company: experiences[currentIndex].company,
                jobStatus: experiences[currentIndex].jobStatus,
                description: experiences[currentIndex].description
            });
        }
    }

    render() {
        return (
          <div id="experience" className="container">
            <div className="row">
              <ExperienceInfo
                date={this.state.monthAndYear}
                logo={this.state.logoUrl}
                company={this.state.company}
                jobStatus={this.state.jobStatus}
                description={this.state.description}
              />

              {currentIndex < experiences.length &&
                // <button onClick={() => this.nextExperienceHandler()}>
                //     nextExperience
                // </button>
                <ExperienceNav nextXp={this.nextExperienceHandler} />
              }

            </div>
          </div>
        );
    }
}

export default Experience;