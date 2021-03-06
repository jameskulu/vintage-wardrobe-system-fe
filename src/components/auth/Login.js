import React, { useContext, useState } from 'react';
import axios from 'axios';
import './auth.css';
import { Link, useHistory } from 'react-router-dom';
import UserContext from '../../context/UserContext';
import { toast } from 'react-toastify';

const Login = () => {
    const history = useHistory();
    const { setUserData } = useContext(UserContext);

    const [disable, setDisable] = useState(false);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const userLogin = async (e) => {
        e.preventDefault();
        setDisable(true);

        try {
            const loginResponse = await axios.post(
                `${process.env.REACT_APP_API_URL}/api/users/login`,
                { email, password }
            );
            setUserData({
                token: loginResponse.data.token,
                user: loginResponse.data.data,
            });
            localStorage.setItem('auth-token', loginResponse.data.token);
            toast.success('You are logged in successfully.');
            history.push('/');
        } catch (err) {
            setDisable(false);
            toast.error(`${err.response.data.message}`);
        }
    };
    return (
        <div className="auth-container">
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
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            id="pwd"
                            autoComplete="off"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Link id="login-link" to="/forgot-password">
                            Forgot Password?
                        </Link>

                        <button
                            disabled={disable}
                            type="button"
                            className="loginbtn"
                            onClick={userLogin}
                        >
                            LOGIN
                        </button>

                        <p>
                            Don???t have an account?
                            <Link to="/signup">Sign Up</Link>.
                        </p>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;
