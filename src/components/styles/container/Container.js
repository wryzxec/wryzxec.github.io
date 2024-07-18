import React from 'react';
import './Container.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython, faJs, faJava } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';


function Container({ title, date, body, language, readmore_link, github_link }) {
    const languageIcons = {
        'python': faPython,
        'javascript': faJs,
        'java': faJava,
    };

    const languageKey = language ? language.toLowerCase() : 'python';
    const icon = languageIcons[languageKey] || faPython;
    const iconClassName = `language-icon-${languageKey}`;

    const isInternalLink = readmore_link && !readmore_link.startsWith('http');

    return (
        <div className='Container'>
            <div className="Container-header">
                <div className="icon-container">
                    <FontAwesomeIcon icon={icon} className={iconClassName} />
                </div>
                <div className='Container-title'>{title}</div>
                <div className='Container-date'>{date}</div>
                <div className="timeline-node"></div>
            </div>
            <div className="links">
                {readmore_link && (
                    <Link className='Container-link' to={readmore_link}>Read More</Link>
                )}
                {readmore_link && github_link && <span className="dot"> &bull; </span>}
                {github_link && (
                    <Link className='Container-link' to={github_link}>GitHub</Link>
                )}
            </div>
        </div>
    );
}

export default Container;
