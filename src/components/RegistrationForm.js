import React from 'react';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUserAction } from '../store/Action';



const RegistrationForm =()=>
{
    const[fname,setFname] = useState("");
    const[lname,setLname] = useState("");
    
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[address, setAddress] = useState("");
    const[city, setCity] = useState("");
    const[state, setState] = useState("");
    const[zipcode, setZipCode] = useState("");
    const[contact, setContact] = useState("");
    const[dob, setDateOfBirth] = useState("");
    const[gender, setGender] = useState("");
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSubmit = (e) =>
    {
        e.preventDefault();
        const postData =
        {
            userFirstName: fname,
            userLastName: lname,
            email: email,
            password: password,
            address: address,
            city : city,
            state : state,
            zipcode : zipcode,
            contact: contact,
            dob:dob,
            gender : gender,
                        
            
        };
        dispatch(addUserAction(postData));
        navigate('/enroll')
    };

    return (
        <div className="registration" >
            <h3>Registration Form</h3>
            
                <form className="registration_form" onSubmit={(e) => handleSubmit(e)}>
                <table>
                    <tr>
                        <td><label htmlFor='name'>Name</label></td>
                        <td><input type="text" value={fname} placeholder="enter firstname" onChange={(e) => setFname(e.target.value)} required/>
                        <input type="text" value={lname} placeholder="enter lastname" onChange={(e) => setLname(e.target.value)} required/></td>
                    </tr>
                    <tr>
                        <td><label htmlFor='email'>Email</label></td>
                        <td><input type="email" value={email}placeholder="enter email id" onChange={(e) => setEmail(e.target.value)} required/></td>
                    </tr>
                    <tr>
                        <td><label htmlFor='password'>Password</label></td>
                        <td><input type="password" value={password} placeholder="enter password" onChange={(e) => setPassword(e.target.value)} required/></td>
                    </tr>
                    <tr>
                        <td><label htmlFor='contact'>Contact</label></td>
                        <td><input type="number" min="1" max="10" value={contact} placeholder="enter contact" onChange={(e) => setContact(e.target.value)} required/></td>
                    </tr>
                    <tr>
                        <td><label htmlFor='dob'>Date Of Birth</label></td>
                        <td><input type="date" value={dob} placeholder="enter DateOfBirth" onChange={(e) => setDateOfBirth(e.target.value)} required/></td>
                    </tr>
                    <tr className='gender_radiobtn'>
                        <td><label htmlFor='gender'>Gender</label></td>
                        <td><input type="radio" name="gender" value="male" required/>
                            <label htmlFor="male">Male</label>
                        <input type="radio" name="gender" value="female" required />
                            <label htmlFor="female">Female</label>
                        <input type="radio" name="gender" value="other" required/>
                            <label htmlFor="other">Other</label></td>
                    </tr>
                    <tr className='useraddress'>
                        <td><label htmlFor='address'>Address</label></td>
                        <td colSpan="3"><input type="text" placeholder="enter address"  onChange={(e) =>setAddress(e.target.value)} required/></td>
                    </tr>
                    <tr className='useraddress_zipcode'>
                        <td></td>
                        <td><select onChange={(e) =>setCity(e.target.value)} required>
                            <option value="city">City</option>
                            <option value="chicago">Chicago</option>
                            <option value="newyorkcity">New York City</option>
                            <option value="losangeles">Los Angeles</option>
                            <option value="houston">Houston</option>
                            <option value="seattle">Seattle</option>
                            <option value="denver">Denver</option>
                        </select>
                        <select onChange={(e) =>setState(e.target.value)} required>
                            <option value="state">State</option>
                            <option value="illinois">Illinois</option>
                            <option value="newyork">New York</option>
                            <option value="california">California</option>
                            <option value="texas">Texas</option>
                            <option value="washington">Washington</option>
                            <option value="colorado">Colorado</option>
                        </select>

                        <input type="number" placeholder="enter pincode" onChange={(e) =>setZipCode(e.target.value)}/></td>
                    </tr>
                    <tr>
                        
                        <td className='regbtn' colspan="2"><button type="submit" className='register_btn' >Register</button></td>
                    </tr>
                    </table>
                </form>
            
        </div>
    );
};

export default RegistrationForm;