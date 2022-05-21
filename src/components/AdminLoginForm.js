import React from 'react';

function AdminLoginForm(props) {
    return (
        <div className='admin_login_form'>
            <h3>Admin Login</h3>
            <form>                
                <input type="text" placeholder="admin username"/>
                <input type="password" placeholder="admin password"/>
                <input type="submit" value="Admin Login" className='login_btn'/>
            </form>
        </div>
    );
}

export default AdminLoginForm;