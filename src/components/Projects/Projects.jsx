import React from 'react'
import './index.css'
import Sidebar from '../Sidebar/Sidebar'
import Footer from '../Footer/Footer'
import projectData from '../../Contents/projectData';

const Projects = ({ handleOnclick }) => {
    return (
        <div className="container">
            <Sidebar />
            <div className='page-header'>
                <h>My Projects</h>

                <p>Below are some project that I have done & currently working on :)</p>
            </div>

            <div className="page-block">
                {projectData.map((project, index) => (
                    <div className="page-item" key={index}>

                        <div
                            className="page-img"
                            style={{ backgroundImage: `url(${project.img})` }} 
                            aria-hidden="true"
                        ></div>


                        <div className="page-details">
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

            <Footer />
        </div>
    )
}

export default Projects