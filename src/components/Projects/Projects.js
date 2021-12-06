import React from 'react';
import './Projects.scss';

class Projects extends React.Component {
    render(){
        return(
            <section className="projects" id="/projects">
                <h1 className="projectsHeader">Projects</h1>
                <iframe className="projectIframe" src="https://swedishsailor.github.io/planetarium/"/>
                <iframe className="projectIframe" src="https://swedishsailor.github.io/deepintopic/"/>
            </section>
        )
    }

} export default Projects;