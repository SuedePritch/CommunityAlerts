
import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { LOGIN_USER } from '../../utils/mutations';
import Auth from '../../utils/auth.js';
import './Form.scss'

function LoginForm({loginMenuState, setLoginMenuState}) {
    // BUILD MUTATION FOR LOGIN_USER
    const [login] = useMutation(LOGIN_USER); 
    const [userFormData, setUserFormData] = useState({ email: '', password: ''});

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const userMutationResponse = await login ({
                variables: { email: userFormData.email, password: userFormData.password},
            });
            const token = userMutationResponse.data.login.token;
            Auth.login(token);
        } catch (e) {
            alert('Login Failed');
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({
            ...userFormData,
            [name]: value,
        });
    };

    const toggleloginsignup = () => {
        setLoginMenuState(true)
    
      }
return (
    <div>
        <form className='form'>
            <button className={`loginbutton loginSignupButtons ${loginMenuState ? 'inactive' : 'active'}`} type="button">Login</button>
            <button className={`signupbutton loginSignupButtons ${loginMenuState ? 'active' : 'inactive'}`}onClick={toggleloginsignup} type="button">Signup</button>
                    <div className='form-field login'>
                        <label htmlFor="email">Email</label>
                        <input name= 'email' type='email' id='email' autoComplete="current-email"
                            onChange={handleChange}></input>
                    </div>
                    <div className='form-field login'>
                        <label htmlFor="password">Password</label>
                        <input name='password' type='password' id='password' autoComplete="current-password"
                            onChange={handleChange}></input>
                    </div>
                    <button className='form-field form-field-button  login' type='button' onClick={handleFormSubmit}>Login </button>
            </form>
    </div>
)
}

export default LoginForm