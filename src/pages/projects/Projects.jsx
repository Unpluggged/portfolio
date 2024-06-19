import Project from '../../components/project/Project';
import { projects } from '../../myprojects';

import './Projects.css';

const Projects = () => {
    return(
        <main className="section">
            <div className="container">
                <h2 className="title-1">Projects</h2>
                <ul className="projects">
                    {projects.map((project, i)=>(
                        <Project title={project.title} img={project.img} key={i} index={i}/>
                    ))}
                </ul>
            </div>
        </main>
    )
}

export default Projects;