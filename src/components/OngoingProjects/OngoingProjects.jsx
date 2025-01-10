import React from 'react'
import './index.css'
import projectData from '../../Contents/projectData';
import { Link } from 'react-router-dom'


function OngoingProjects({ handleOnclick }) {

    const ongoingProject = projectData.filter(project => project.time.includes("Ongoing"));

    return (
        <div className="project-block">
            <br />
            <p>Below are projects that I'm currently working on, see more on my <Link to="/projects">Project Page</Link>. </p>
            <p>Feel free to reach out if anything sparks your interest. :)</p>
            {ongoingProject.map((project, index) => (
                <div className="project-item" key={index}>
                    <div
                            className="project-img"
                            style={{ backgroundImage: `url(${project.img})` }} aria-hidden="true"
                        ></div>

                    <div className="project-details">
                        <h>{project.title}</h> 
                        <span>{project.time}</span> 
                        <p>{project.description}</p> 

                        {project.link && (<a href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="github-link">{project.linkSubtitle}</a>)}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default OngoingProjects

