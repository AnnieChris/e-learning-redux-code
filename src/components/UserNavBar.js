import React from 'react';
import { useSelector } from 'react-redux';
import {useState} from 'react';
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';


function UserNavBar(props) {
    const user = useSelector(state => state.loggedinUser);

     
    const[userId, setUserId] = useState('');
    const[password, setPassword] = useState('');  

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
    
    return (
        <div className='user_navbar'>
            <Link to="/home">Home </Link> | 
            <Link to="/profile">Profile </Link> | 
            <Link to="/courses">Courses </Link>|
            <Link to="/contactus">Contact Us </Link> |
        
            <div className='user_lgout'>
                <p>Welcome {user}</p>
                <button type='button' onClickCapture={logout}>log out</button>
            </div>
        </div>
    );
    
}

export default UserNavBar;