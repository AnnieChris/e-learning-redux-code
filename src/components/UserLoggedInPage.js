import React from 'react';
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { currentUser } from '../store/Reducer';
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import http from "../store/http-common";

import UserNavBar from './UserNavBar';

function UserLoggedInPage(props) {

    const user = useSelector(state => state.loggedinUser);   
    const enrolledCourses = useSelector(state => state.data);  
    const enrolledCoursesHTML = enrolledCourses.map((course) => 
        <tr key={course.usercourseKey}>
            <td>{course.course.courseId}</td>
            <td>{course.course.courseName}</td>
            <td>{course.status}</td>
        </tr>
    )

    return (
        <div  className='page_common'>
            <UserNavBar/>
            <h1>Hello {user}</h1>
            <h3>You have Successfully logged in &#9989;</h3>
            <div className='user_enrollbtn'>
                <Link to="/courses"><Button>Enroll New Course</Button></Link>
            </div>
            <div className='user_courselist'>
                <h2>Enrolled Courses</h2>
                <table className='tableDefault'>
                    <thead>
                        <tr>
                            <th>Course ID</th>
                            <th>Course Name</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {enrolledCoursesHTML}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default UserLoggedInPage;