import React from "react";

const ResetPassword = () =>{
    return(
        <div class="container">
        <form action="">
            <div class="reset-form-container">
              <h1>RESET PASSWORD?</h1>
             
          
             <div class="reset-form">
    
               
                <input type="password" placeholder="New Password" name="pwd" id="pwd" required/>
                <input type="password" placeholder=" Confirm Password" name="pwd" id="pwd" required/>
            
            
              <button type="submit" class="resetbtn">SEND</button>
             
            </div>
            
            
            </div>
          </form>
    </div>
        
    )
}

export default ResetPassword;