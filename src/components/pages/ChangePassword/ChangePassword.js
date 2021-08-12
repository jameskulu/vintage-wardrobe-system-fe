

import PasswordField from 'material-ui-password-field';
import './changePassword.css'

const ChangePassword = () => {
    return(
        <div class="container-fluid">


                        <section>
                            <div class="row">
                                <div class="col-md-12 col-sm-12 change-password-background" >
                                    <div class="text-center">
                                        <h4 class="text-light text-center change-password-title">Change Password</h4>

                                    </div>
                                
                                        
                                </div>
                            </div>
                        
                        </section>


                        <div class="row"> 
			<div class=" col-md-12 col-sm-12">

	<form class=" col-md-6 offset-md-3 " >
				  <div class="form-group">
				    <label for="formGroupExampleInput" class="font-weight-bold"> Old Password</label>
				    <input type="password" class="form-control" id="oldPassword" placeholder="Enter Old Password"/>
				  </div>

                  <div class="form-group">
				    <label for="formGroupExampleInput" class="font-weight-bold"> New Password</label>
				    <input type="password" class="form-control" id="newPassword" placeholder="Enter New Password"/>
				  </div>
		

                  <div class="form-group">
				    <label for="formGroupExampleInput" class="font-weight-bold"> Cofirm Password</label>
				    <input type="password" class="form-control" id="confirmPassword" placeholder="Re-enter Password"/>
				  </div>
		
		
				  
				  <button type="button" class="btn password-btn col-md-12 ">Change Password</button>
				      

	</form>

			</div>
		</div>

                        




        </div>

    )
}

export default ChangePassword