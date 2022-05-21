import React from 'react';
import { currentUser } from '../store/Reducer_bk';
import { useSelector } from 'react-redux';

const Enrollment = () =>{
    const user = useSelector(currentUser);
    return (
        <div>
            <h1>Hello {user} Thank You for Enrolling the course</h1>
        </div>
    );
}

export default Enrollment;