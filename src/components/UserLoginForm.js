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
    const [isLoggedin, setIsLoggedin] = useState(false);

    const login = (e) => {
        e.preventDefault();
        console.log(userId, password);
        const userData = {
          userId,
          password,
        };
        localStorage.setItem('token-info', JSON.stringify(userData));
        setIsLoggedin(true);
        setUserId('');
        setPassword('');
      }; 


    const logout = () => {
        localStorage.removeItem('token-info');
        setIsLoggedin(false);
      };


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
        <>
        <div className='login_form'>
        <div id="loginFormDiv">
        
            <h3>User Login</h3>
            {!isLoggedin ? (
          <>
            <form action="" onSubmit={(e)=>handleSubmit(e)}>
                
                <input type="text" placeholder="enter username" onChange={(e)=> setUserId(e.target.value)}/>
                <input type="password" placeholder="enter password"  onChange={(e)=> setPassword(e.target.value)}/>
                <input type="submit" value="Login" className='login_btn'/>
                <Link to="/newUser"><input type="button" value="Create New User " className='login_btn' /></Link> 
            </form>
            </>
            ) : (
                <>
                  <h1>User is logged in</h1>
                  <button onClickCapture={logout}>logout user</button>
                </>
              )}
        </div>
    </div>
    </>
    );
}
export default LoginForm;