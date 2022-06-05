import React from 'react';
import UserNavBar from './UserNavBar';

function ContactUsPage(props) {
    return (
        <div className='contactus_page'>
            <UserNavBar/>
            <h1>Contact Us</h1>
            <h4>Mars ReturnShip</h4>
            <address>
                20900 Swenson Drive, Suite 300 Waukesha, WI 53186
                <p>(877) 627-7481</p>
            </address>
            <div className='socialmedia_links'>
                <a href='https://www.facebook.com/MARSReturnship/' target='_blank'>Facebook</a>
                <a href='https://www.instagram.com/marsreturnship/' target='_blank'>Instagram</a>
                <a href='https://www.linkedin.com/company/mars-returnship/mycompany/' target='_blank'>LinkedIn</a>
            </div>
            
        </div>
    );
}

export default ContactUsPage;