import React, { useEffect, useState } from 'react';
import Button from '../styles/button/Button';
import HomeLink from '../styles/homelink/HomeLink';

import './MenuBar.css';
import { SiReact } from 'react-icons/si';

const MenuBar = () => {
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`MenuBar ${isSticky ? 'fixed-menu' : ''}`}>
      <div className='MenuBar-welcome-react-container'>
        <div className='MenuBar-welcome'>
          Welcome to my website | Built with React.js
        </div>
        <div className='MenuBar-react-logo'>
          <SiReact />
        </div>
      </div>
      <div className='MenuBar-right-container'>
        <div className='HomeLink-container'>
          <HomeLink />
        </div>
        <div className='Button-container'>
          <Button>
            Download CV
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
