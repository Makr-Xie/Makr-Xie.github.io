import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './index.css';

const Sidebar = () => {

    const location = useLocation();

    return (
        <div className='bar-containter'>
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
            <Link to="/gallery" className={location.pathname === '/gallery' ? 'active' : ''}>Gallery</Link>
            <Link to="/projects" className={location.pathname === '/projects' ? 'active' : ''}>Projects</Link>
            <Link to="/beyondcs" className={location.pathname === '/beyondcs' ? 'active' : ''}>Beyond CS</Link>
            {/* <p>TBD</p> */}
        </div>
    )
}

export default Sidebar