import React from 'react';


const ProjectCard = (props) => {
    // const styles = {
    //     backgroundImage: props.screenshot
    // }

    return (
        <div className="col-md-6 col-lg-4">
            <div className="card bg-dark border-0 mx-1 my-3">
                {/* <img src={styles} className="card-img" alt="..." /> */}
                <img src={props.screenshot} className="card-img" alt="..." />
                <div className="card-img-overlay">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                    </p>
                    {/* <p className="card-text">Last updated 3 mins ago</p> */}
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;