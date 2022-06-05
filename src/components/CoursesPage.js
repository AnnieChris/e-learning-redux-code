import React from 'react';
import UserNavBar from './UserNavBar';

function CoursesPage(props) {
    return (
        <div className='courses_page'>
            <UserNavBar/>
            <h1>List of available Courses</h1>
            <div>
                <table>
                    <tr>
                        <td>HTML</td>
                        <td><button>enroll</button></td>
                    </tr>
                    <tr>
                        <td>CSS</td>
                        <td><button>enroll</button></td>
                    </tr>
                    <tr>
                        <td>JavaScript</td>
                        <td><button>enroll</button></td>
                    </tr>
                    <tr>
                        <td>JQuery</td>
                        <td><button>enroll</button></td>
                    </tr>
                    <tr>
                        <td>Java</td>
                        <td><button>enroll</button></td>
                    </tr>
                    <tr>
                        <td>MSSQL</td>
                        <td><button>enroll</button></td>
                    </tr>
                    <tr>
                        <td>AWS</td>
                        <td><button>enroll</button></td>
                    </tr>
                </table>
            </div>

        </div>
    );
}

export default CoursesPage;