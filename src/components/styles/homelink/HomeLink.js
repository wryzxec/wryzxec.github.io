import React from 'react';
import { Link } from 'react-router-dom';
import './HomeLink.css';

const HomeLink = () => {
    return (
        <Link className='HomeLink' to='/home' >Home</Link>
    );
};

export default HomeLink;