import React from 'react';
import UserNavBar from './UserNavBar';

import { useSelector } from 'react-redux';

function ProfilePage(props) {
    const user = useSelector(state => state.loggedinUser);
    return (
        <div className='profile_page'>
            <UserNavBar/>
            <h1>{user} Profile</h1>
            <div>
                <table>
                <tr>
                        <td>Picture</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Name</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Email Id</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Date Of Birth</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Gender</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Address</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>City</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>State</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>ZipCode</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Phone</td>
                        <td></td>
                    </tr>
                    
                </table>
            </div>
        </div>
    );
}

export default ProfilePage;