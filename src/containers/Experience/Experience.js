import React, { Component } from 'react';

import MolenGeekLogo from '../../assets/img/molengeek-logo.png';
import ZapFloorHqLogo from '../../assets/img/zap-floor-hq-logo.png';
import BeCodeLogo from '../../assets/img/becode-logo.png';
import InraciLogo from '../../assets/img/inraci-logo.png';

import './Experience.css';
import ExperienceInfo from '../../components/Experience/ExperienceInfo/ExperienceInfo';
import ExperienceNav from '../../components/Experience/ExperienceNav/ExperienceNav';

const experiences = [
    {
        monthAndYear: 'June - July 2019',
        logoUrl: MolenGeekLogo,
        jobStatus: 'Web & Mobile developer intern',
        company: 'MolenGeek',
        websiteUrl: 'https://molengeek.com/',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi provident numquam eveniet quas animi? Commodi labore blanditiis asperiores, quaerat itaque eligendi excepturi nulla assumenda, aliquam facilis explicabo quibusdam obcaecati sapiente?'
    },
    {
        monthAndYear: 'December 2018 - June 2019',
        logoUrl: MolenGeekLogo,
        jobStatus: 'Web & Mobile developer trainee',
        company: 'MolenGeek',
        websiteUrl: 'https://molengeek.com/',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi provident numquam eveniet quas animi? Commodi labore blanditiis asperiores, quaerat itaque eligendi excepturi nulla assumenda, aliquam facilis explicabo quibusdam obcaecati sapiente?'
    },
    {
        monthAndYear: 'April - July 2018',
        logoUrl: ZapFloorHqLogo,
        jobStatus: 'Web Developer intern',
        company: 'ZapFloorHQ',
        websiteUrl: 'https://www.zapfloorhq.com/',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi provident numquam eveniet quas animi? Commodi labore blanditiis asperiores, quaerat itaque eligendi excepturi nulla assumenda, aliquam facilis explicabo quibusdam obcaecati sapiente?'
    },
    {
        monthAndYear: 'September 2017 - July 2018',
        logoUrl: BeCodeLogo,
        jobStatus: 'Web Developer trainee',
        company: 'BeCode',
        websiteUrl: 'https://www.becode.org/',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi provident numquam eveniet quas animi? Commodi labore blanditiis asperiores, quaerat itaque eligendi excepturi nulla assumenda, aliquam facilis explicabo quibusdam obcaecati sapiente?'
    },
    {
        monthAndYear: '201? - 201?',
        logoUrl: InraciLogo,
        jobStatus: 'Photography studies',
        company: 'INRACI',
        websiteUrl: 'https://www.inraci.be/',
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
            currentIndex: currentIndex,
            maxIndex: experiences.length,
            monthAndYear: experiences[currentIndex].monthAndYear,
            logoUrl: experiences[currentIndex].logoUrl,
            company: experiences[currentIndex].company,
            websiteUrl: experiences[currentIndex].websiteUrl,
            jobStatus: experiences[currentIndex].jobStatus,
            description: experiences[currentIndex].description
        }
    }

    nextExperienceHandler = () => {
        if (currentIndex < experiences.length) {
            currentIndex = currentIndex + 1;
            // console.log(currentIndex);

            this.setState({
                currentIndex: currentIndex,
                monthAndYear: experiences[currentIndex].monthAndYear,
                logoUrl: experiences[currentIndex].logoUrl,
                company: experiences[currentIndex].company,
                websiteUrl: experiences[currentIndex].websiteUrl,
                jobStatus: experiences[currentIndex].jobStatus,
                description: experiences[currentIndex].description
            });
        }
    }

    prevExperienceHandler = () => {
        if (currentIndex > 0) {
            currentIndex = currentIndex - 1;
            this.setState({
                currentIndex: currentIndex,
                monthAndYear: experiences[currentIndex].monthAndYear,
                logoUrl: experiences[currentIndex].logoUrl,
                company: experiences[currentIndex].company,
                websiteUrl: experiences[currentIndex].websiteUrl,
                jobStatus: experiences[currentIndex].jobStatus,
                description: experiences[currentIndex].description
            });
        }
    }

    render() {
        return (
          <section id="experience">
            <div className="container p-5">
              <h3>Experience</h3>
              <div className="row">
                <ExperienceNav
                  currentIndex={this.state.currentIndex}
                  maxIndex={this.state.maxIndex}
                  prevXp={this.prevExperienceHandler}
                  nextXp={this.nextExperienceHandler}
                  logo={this.state.logoUrl}
                />

                <ExperienceInfo
                  date={this.state.monthAndYear}
                  logo={this.state.logoUrl}
                  company={this.state.company}
                  websiteUrl={this.state.websiteUrl}
                  jobStatus={this.state.jobStatus}
                  description={this.state.description}
                />
              </div>
            </div>
          </section>
        );
    }
}

export default Experience;