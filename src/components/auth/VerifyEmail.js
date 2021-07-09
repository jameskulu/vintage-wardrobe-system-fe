import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import './auth.css';

const VerifyEmail = (props) => {
    const token = props.match.params.token;
    const [message, setMessage] = useState();

    useEffect(() => {
        const verifyEmail = async () => {
            try {
                await axios.post(
                    `${process.env.REACT_APP_API_URL}/api/users/email-activate`,
                    {
                        token,
                    }
                );
                setMessage("Your account has been verified")
            } catch (err) {
                setMessage("Your token in invalid or expired")
            }
        };
        verifyEmail();
    },[]);

    return (
        <div class="container">
            <form action="">
                <div class="form-container" style={{ textAlign: 'center' }}>
                    <h4>{message}</h4>
                    <Link to="/login">
                        <button type="submit" class="resetbtn">
                            GO TO LOGIN
                        </button>
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default VerifyEmail;
