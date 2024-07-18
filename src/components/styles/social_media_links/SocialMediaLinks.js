import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './SocialMediaLinks.css';

const SocialMediaLinks = () => {
    return (
        <div className="social-media-links">
            <a href="mailto:lucas.bruckbauer@gmail.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faEnvelope}/>
            </a>
            <a href="https://github.com/wryzxec" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub}/>
            </a>
            <a href="https://www.linkedin.com/in/lucasbruckbauer/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin}/>
            </a>
        </div>
    );
};

export default SocialMediaLinks;