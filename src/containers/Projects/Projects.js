import React, { Component } from 'react';

// MDBreact
import { MDBContainer, MDBRow } from "mdbreact";

import './Projects.css';
import ZapFloorScreenshot from '../../assets/img/zapfloorhq-screenshot.jpg';
import ProjectCard from '../../components/ProjectCard/ProjectCard';

const projects = [
    {
        id: 3,
        name: 'Rock\'n brol BaBy',
        stackArr: [
            'Adobe XD',
            'HTML',
            'CSS',
            'JavaScript',
            'Bootstrap',
            'WordPress Dev',
            'PHP'
        ],
        screenshot: ZapFloorScreenshot,
        projectUrl: '',
        githubUrl: '',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur, esse blanditiis dicta facilis accusamus quod velit quaerat quas quo est, dolorum culpa possimus.'
    },
    {
        id: 2,
        name: 'ZapFloorHQ',
        stackArr: [
            'HTML',
            'CSS',
            'JavaScript',
            'Bootstrap',
            'WordPress Dev',
            'PHP'
        ],
        screenshot: ZapFloorScreenshot,
        projectUrl: '',
        githubUrl: '',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur, esse blanditiis dicta facilis accusamus quod velit quaerat quas quo est, dolorum culpa possimus.'
    },
    {
        id: 1,
        name: 'Quartier Latin',
        stackArr: [
            'HTML',
            'CSS',
            'JavaScript',
            'WordPress',
            'PHP'
        ],
        screenshot: ZapFloorScreenshot,
        projectUrl: '',
        githubUrl: '',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur, esse blanditiis dicta facilis accusamus quod velit quaerat quas quo est, dolorum culpa possimus.'
    }
];

class Projects extends Component {
    render() {
        return (
          <section id="projects">
            <MDBContainer className="mt-5">
              <h3 className="h3-ml">Projects</h3>
              <MDBRow>

                {projects.map(project => {
                  return (
                      <ProjectCard
                        key={project.id}
                        screenshot={project.screenshot}
                        name={project.name}
                        stackUsed={project.stackArr}
                      />
                  );
                })}

              </MDBRow>
            </MDBContainer>
          </section>
        );
    }
}

export default Projects;