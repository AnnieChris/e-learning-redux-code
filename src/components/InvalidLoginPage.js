import React from 'react';
import {Link} from 'react-router-dom';

function InvalidLoginPage(props) {
    return (
        <div className='invalid_userloginpage'>
            <h1>Invalid Login Credentials</h1>
            <h2>Please Register</h2>
            <Link to="/newUser"><button>Register</button></Link>
        </div>
    );
}

export default InvalidLoginPage;