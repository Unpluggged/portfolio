import { useParams } from 'react-router-dom';
import { projects } from '../../myprojects';
import BtnGitHub from '../../components/btnGitHub/BtnGitHub';
import './SingleProject.css';

const SingleProject = () => {

    const {id} = useParams();

    const project = projects[id]

    return(
        <main className="section">
            <div className="container">
                <div className="project-details">
                    <h1 className="title-1">{project.title}</h1>
                    <img src={project.imgBig} alt="" className='project-details__cover'/>

                    <div className="project-details__desc">
                        <p>{project.skills}</p>
                    </div>
                    {project.gitHubLink ? <BtnGitHub link={project.gitHubLink}/> : null}
                </div>
            </div>
        </main>
    )
}

export default SingleProject;