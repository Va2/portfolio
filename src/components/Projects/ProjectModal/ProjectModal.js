import React, { Component } from "react";

// MDBreact
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  // MDBModalFooter
} from "mdbreact";

import './ProjectModal.css'

class ProjectModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
    modal: false
    };
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  render() {
    return (
      <MDBContainer>
        {/* BUTTON */}
        <MDBBtn className="rgba-gradient" onClick={this.toggle}>
          More info
        </MDBBtn>
        {/* MODAL */}
        <MDBModal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className="text-dark"
        >
          <MDBModalHeader toggle={this.toggle}>
            {this.props.name}
          </MDBModalHeader>
          <MDBModalBody>
            <p className="text-justify">{this.props.projectType}</p>
            <p className="text-justify">
              {this.props.description}
            </p>
            <p className="text-justify">
              #{this.props.stackUsed.join(" #")}
            </p>
            <a href={this.props.projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link">
                {this.props.projectUrl}
                {/* Online Project */}
            </a>
          </MDBModalBody>
        </MDBModal>
      </MDBContainer>
    );
  }
}
export default ProjectModal;