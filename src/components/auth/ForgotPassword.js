import React from "react";


const ForgotPassword = () => {

    return (
        <div class="container">
        <form action="">
            <div class="forget-form-container">
                <h1>FORGET PASSWORD?</h1>


                <div class="forget-form">
                    <p id="text-sec">Don’t worry! Resetting your password is easy. Enter your email address that you had
                        provided during register.</p>

                    <input type="text" placeholder="Email" name="email" id="email" required/>


                    <button type="submit" class="forgetbtn">SEND</button>

                </div>

                <p> Remember your password?<a href="/login">Login</a>.</p>
            </div>
        </form>
    </div>
    )

}

export default ForgotPassword;