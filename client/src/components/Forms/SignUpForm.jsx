import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { ADD_USER } from '../../utils/mutations';
import Auth from '../../utils/auth.js';
import './Form.scss'

function SignUpForm({loginMenuState, setLoginMenuState}) {
    // BUILD MUTATION FOR LOGIN_USER
    const [addUser] = useMutation(ADD_USER);
    const [signupFormData, setSignupFormData] = useState({ email: '', password: ''});

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const userMutationResponse = await addUser ({
                variables: { username: signupFormData.username, email: signupFormData.email, password: signupFormData.password},
            });
            const token = userMutationResponse.data.addUser.token;
            Auth.login(token);
        } catch (e) {
        console.log(e)
            alert('Email or Username already taken')
        }
    };
    const handleChange = (event) => {
        const { name, value } = event.target;
        setSignupFormData({
            ...signupFormData,
            [name]: value,
        });
};

const toggleloginsignup = () => {
    setLoginMenuState(prevState =>{
      return !prevState
    })

  }
return (
    <div>
        <form className='form' onSubmit={handleFormSubmit}>
        <button className={`loginbutton loginSignupButtons ${loginMenuState ? 'inactive' : 'active'}`}onClick={toggleloginsignup}>Login</button>
            <button className={`signupbutton loginSignupButtons ${loginMenuState ? 'active' : 'inactive'}`}onClick={toggleloginsignup}>Signup</button>
                    <div className='form-field signup'>
                        <label htmlFor="username">Username</label>
                        <input name= 'username' type='username' id='username'
                            onChange={handleChange}></input>
                    </div>
                    <div className='form-field signup'>
                        <label htmlFor="email">Email</label>
                        <input name= 'email' type='email' id='email'
                            onChange={handleChange}></input>
                    </div>
                    <div className='form-field signup'>
                        <label htmlFor="password">Password</label>
                        <input name='password' type='password' id='password'
                            onChange={handleChange}></input>
                    </div>
                    <button className="form-field form-field-button signup" type='submit' >Signup </button>
            </form>
    </div>
)
}

export default SignUpForm