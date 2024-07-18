import React from 'react';
import './AboutMe.css';
import SocialMediaLinks from '../styles/social_media_links/SocialMediaLinks';

function AboutMe() {
  return (
    <div className='AboutMe'>
      <div className="AboutMe-header">
        Lucas Bruckbauer
      </div>
      <div className='AboutMe-body'>
        Computer Science ⋅ The University of Edinburgh
      </div>
      <SocialMediaLinks />
    </div>
  );
}

export default AboutMe;