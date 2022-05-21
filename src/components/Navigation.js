import React from 'react';

import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';


function Navigation(props) {
    return (
        <div>
            <Link to="/home">Home </Link> | 
            <Link to="/profile">Profile </Link> | 
            <Link to="/courses">Courses </Link>|
            <Link to="/contactus">Contact Us </Link> |
        </div>
    );
    
}

export default Navigation;