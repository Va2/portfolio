import React from 'react';

// MDBreact
import { MDBMask, MDBView, MDBCol } from 'mdbreact';
import ProjectModal from '../ProjectModal/ProjectModal';
import "./ProjectCard.css";

const ProjectCard = props => {
  return (
    <MDBCol md="6" lg="4" key={props.keyId} className="py-3 px-5 p-sm-2">
      <MDBView hover>
        <img src={props.screenshot} className="img-fluid" alt="" />
        <MDBMask className="text-center center-content" overlay="teal-strong">
          <h4 className="white-text">{props.name}</h4>
          <br />
          <p>#{props.stackUsed.join(" #")}</p>
          <ProjectModal
            name={props.name}
            stackUsed={props.stackUsed}
            description={props.description}
            projectType={props.projectType}
            projectUrl={props.projectUrl}
          />
        </MDBMask>
      </MDBView>
    </MDBCol>
  );
};

export default ProjectCard;