import { fontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './footer.css';

export default function Footer() {
    return (
        <footer className="custom-footer text-light py-3">
            <div className="container text-center">
                {/* set icons and links */}
                <a href="https://www.linkedin.com/in/kaleb-boothe-194881293/" className="linkedin-link me-4" aria-label="LinkedIn" style={{ fontSize: '2rem' }} target='_blank' rel="noopener noreferrer"> <fontAwesomeIcon icon={faLinkedin} /> </a>
                <a href="https://github.com/KBoothe617" className="github-link me-4" aria-label="GitHub" style={{ fontSize: '2rem' }} target='_blank' rel="noopener noreferrer"> <fontAwesomeIcon icon={faGithub} /> </a>
            </div>
        </footer>
    )
}