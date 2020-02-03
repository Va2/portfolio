import React, { Component } from 'react';

// MDBreact
import { MDBContainer, MDBRow } from "mdbreact";

import './Projects.css';
import ZapFloorScreenshot from '../../assets/img/zapfloorhq-screenshot.jpg';
import RNBBScreenshot from "../../assets/img/rocknbrolbaby_screenshot.jpg";
import QLScreenshot from "../../assets/img/quartierlatin_screenshot.jpg";
import PortfolioScreenshot from '../../assets/img/portfolio_screenshot.jpg';
import ProjectCard from '../../components/Projects/ProjectCard/ProjectCard';

const projects = [
  {
    id: 4,
    name: "Rock'n brol Baby",
    stackArr: [
      "AdobeXD",
      "HTML",
      "Sass",
      "JavaScript",
      "WordPressDev",
      "PHP"
    ],
    screenshot: RNBBScreenshot,
    projectUrl: "https://rocknbrolbaby.be/",
    githubUrl: "",
    description:
      "Rock 'n brol Baby is a different birth list, which values recuperation and trusts second hand. It is also a choice of original birth gifts to please your loved ones. The approach, eco-responsible and personalized, allows (future) parents to welcome baby in an ethical spirit and at a reduced price.",
    projectType:
      "Showcase website"
  },
  {
    id: 3,
    name: "ZapFloorHQ",
    stackArr: [
      "HTML",
      "Sass",
      "Bootstrap",
      "JavaScript",
      "WordPressDev",
      "PHP"
    ],
    screenshot: ZapFloorScreenshot,
    projectUrl: "https://www.zapfloorhq.com/",
    githubUrl: "",
    description:
      "Setting a new benchmark in the serviced offices industry, they help office operators to manage their business and engage with their tenants, all in one place.",
    projectType:
      "Showcase website"
  },
  // {
  //   id: 2,
  //   name: "Quartier Latin",
  //   stackArr: ["HTML", "CSS", "JavaScript", "WordPress", "PHP"],
  //   screenshot: QLScreenshot,
  //   projectUrl: "https://www.quartierlatin.be/",
  //   githubUrl: "",
  //   description:
  //     "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur, esse blanditiis dicta facilis accusamus quod velit quaerat quas quo est, dolorum culpa possimus.",
  //   projectType:
  //     "Showcase website"
  // },  
  {
    id: 1,
    name: "Portfolio",
    stackArr: ["ReactJS", "JSX", "CSS", "Bootstrap", "JavaScript"],
    screenshot: PortfolioScreenshot,
    projectUrl: "",
    githubUrl: "",
    description:
      "My portfolio build with ReactJS.",
    projectType:
      "Showcase website"
  }
];

class Projects extends Component {
    render() {
        return (
          <section id="projects">
            <MDBContainer>
              <h3 className="section-title">Projects</h3>
              <MDBRow>
                {projects.map(project => {
                  return (
                    <ProjectCard
                      key={project.id}
                      screenshot={project.screenshot}
                      name={project.name}
                      stackUsed={project.stackArr}
                      description={project.description}
                      projectType={project.projectType}
                      projectUrl={project.projectUrl}
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