import React from 'react';

import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
function Header(props) {
    return (
        <div className='top_header'>
            <header className='logo'>chrysalis learning hub</header>
            <div className='header_links'>
                <Link to="/UserLogin">User Login </Link> 
                <Link to="/AdminLogin">Admin Login </Link> 
            </div>
        </div>
    );
}

export default Header;