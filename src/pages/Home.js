import React from 'react';

import Menu from '../components/menubar/MenuBar';
import AboutMe from '../components/aboutme/AboutMe';
import Projects from '../components/projects/Projects';

import './Home.css';

export default function Home() {
    return (
      <div className="Home">
        <Menu />
        <div className="Home-body">
          <AboutMe />
          <Projects />
        </div>
      </div>
    )
}