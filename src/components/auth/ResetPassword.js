import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import './auth.css';

const ResetPassword = (props) => {
    const history = useHistory();
    const [disable, setDisable] = useState(false);
    const [newPassword, setNewPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();

    const token = props.match.params.token;

    const submit = async (e) => {
        e.preventDefault();
        setDisable(true);

        if (newPassword !== confirmPassword){
            setDisable(false);
            return toast.error('Two password fields did not match.');
        }
        
        try {
            await axios.post(
                `${process.env.REACT_APP_API_URL}/api/users/reset-password`,
                {
                    newPassword,
                    token,
                }
            );
            toast.success('New password has been changed successfully.');
            history.push('/login');
        } catch (err) {
            setDisable(false);
            toast.error(`${err.response.data.message}`);
        }
    };

    return (
        <div class="auth-container">
            <form action="" onSubmit={submit}>
                <div class="reset-form-container">
                    <h1>RESET PASSWORD?</h1>

                    <div class="reset-form">
                        <input
                            type="password"
                            placeholder="New Password"
                            id="reset-password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder=" Confirm Password"
                            id="reset-confirm-password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />

                        <button
                            disabled={disable}
                            type="submit"
                            class="resetbtn"
                        >
                            SAVE
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ResetPassword;
