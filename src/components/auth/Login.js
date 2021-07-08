import React, { useState } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {

    const history = useHistory()

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const userLogin = async(e) => {
        e.preventDefault()

        try {
            const loginResponse = await axios.post('http://localhost:5000/api/users/login', {email, password})

            localStorage.setItem('auth-token',loginResponse.data.token)
            toast.success('Login Successful.')
            history.push('/')

        }
        catch(err){
            toast.error(`${err.response.data.message}`)
        }

    }
    return (
        <div className="container">
            <form action="">
                <div className="login-form-container">
                    <h1>LOG IN</h1>

                    <div className="login-form">
                        <input
                            type="text"
                            placeholder="Email"
                            name="email"
                            id="email"
                            autoComplete="off"
                            value={email} 
                            onChange={e => setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            id="pwd"
                            autoComplete="off"
                            value={password} 
                            onChange={e => setPassword(e.target.value)}
                        />
                        <Link id="login-link" to="#">
                            Forgot Password?
                        </Link>

                        <button type="button" className="loginbtn" onClick ={userLogin}>
                            LOGIN
                        </button>

                        <p>
                            Don’t have an account?{' '}
                            <Link to="/Signup">Sign Up</Link>.
                        </p>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;
