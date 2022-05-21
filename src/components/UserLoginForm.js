import React from 'react';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';

import {Link} from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { loginAction } from "../store/Action.js";

const LoginForm = () => {

    
    const[userId, setUserId] = useState('');
    const[password, setPassword] = useState('');
    const[error, setError] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {

        e.preventDefault();
        const postData = {
            userId : userId,
            password: password
        };
        dispatch(loginAction(postData, navigate));
    };

    return (
        <div className='login_form'>
        <div id="loginFormDiv">
        
            <h3>User Login</h3>
            <form onSubmit={(e)=>handleSubmit(e)}>
                
                <input type="text" placeholder="enter username" onChange={(e)=> setUserId(e.target.value)}/>
                <input type="password" placeholder="enter password"  onChange={(e)=> setPassword(e.target.value)}/>
                <input type="submit" value="Login" className='login_btn'/>
                <Link to="/newUser"><input type="button" value="Create New User " className='login_btn' /></Link> 
            </form>
        </div>
    </div>
    );
}
export default LoginForm;