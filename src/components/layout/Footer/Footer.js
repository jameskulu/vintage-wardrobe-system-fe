import React from "react";
import './footer.css';


const Footer = () =>{
    const buttonStyle = {
        backgroundColor: '#000000',
        borderRadius: '50%',
      };
    
      const iconStyle = { color: '#ffffff' };
    return(
        <div>
            <footer>
            
            <div class="row">
                <div class="col-md-12 col-sm-12" >
                    
                    
                    <div class="row">
                          <div class="col-md-12 col-sm-12 text-center">
                          <i class="fab fa-facebook"></i>
                          <i class="fab fa-instagram"></i>
                          <i class="fab fa-twitter"></i>
                        
                          </div>
                        
                    </div>
    
                                 
                    <div class="container-fluid text-center ">
    
                      
                      <div class="row">
    
                        
                        <div class="col-md-4 mt-md-0 mt-3">
    
                          
                        <div class="list-group">
                                <a href="#" class="list-group-item list-heading">
                                    Information
                                </a>
                                <a href="#" class="list-group-item ">About Us</a>
                                <a href="#" class="list-group-item ">More Search</a>
                                
                        </div>
                                                        
    
                        </div>
                    
                       
                        <div class="col-md-4 mb-md-0 mb-3">

                            <div class="list-group">
                                    <a href="#" class="list-group-item list-heading">
                                        Rentals
                                    </a>
                                    <a href="#" class="list-group-item ">Upload an Item</a>
                                    <a href="#" class="list-group-item ">Items For Rent</a>
                                    <a href="#" class="list-group-item ">Rent Orders</a>
                                    
                            </div>
    
                          
                         
                        </div>
                        
                        <div class="col-md-4 mt-md-0 mt-3">
                            <div class="list-group">
                                        <a href="#" class="list-group-item list-heading">
                                          Profile
                                        </a>
                                        <a href="#" class="list-group-item ">My Profiles</a>
                                        
                                        <a href="#" class="list-group-item ">My Orders</a>
                                        
                            </div>
    
    
                        </div>
    
                      </div>
                    
                    </div>
      
                </div>
            </div>
    
            <section class ="copyright">
            <div class="row">
                <div class="col-md-12 col-sm-12" >
                    <div class="text-center">
                       <p class="text-light text-uppercase text-center reserved">All Right Reserved</p>
    
                    </div>
                </div>
            </div>
    
        </section>
    
    
       
            </footer>


        </div>
    )

}

export default Footer;