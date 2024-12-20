import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './project.css';

export default function Project({ image, title, deployedLink, githubLink }) {
    return (
        <div className="project-container">
            <div className="project-image">
                <img src={image} alt={title} />
                <div className="overlay">
                    <a href={deployedLink} className="project-title" target="_blank" rel="noopener noreferrer">
                        {title}
                    </a>
                    <a href={githubLink} className="github-link" target="_blank" rel="noopener noreferrer">
                        <fontAwesomeIcon icon={faGithub} size="2x" />
                    </a>
                </div>
            </div>
        </div>
    );
}