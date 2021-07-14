import React from 'react';
import './home.css';
import woman  from '../../../images/woman.jpg';
import kid  from '../../../images/kids.png';
import men  from '../../../images/men.png';
import dress1 from '../../../images/dress1.jpg'
import dress2 from '../../../images/dress2.jpg'
import dress3 from '../../../images/dress3.jpg'
import dress4 from '../../../images/dress4.jpg'


const Home = () => {
    return (
        <div>
             <section class= "bg" >
        <div class="container ">       
            <div class="row h-100">
                
                 <div class="col-md-12 col-sm-12 text-center my-auto" >
                     <button class="btn btn-rent align-items-center" >Rent your Clothes</button>
                </div>
                
            </div>
         </div>
    </section>

    <section id="rent">
        <div class="row">
            <div class="col-md-12 col-sm-12">
                 <h2 class="section-heading text-uppercase text-center">Rent Clothing</h2>
            </div>
        </div>

        <div class="row text-center">
                    <div class="col-md-4">
                        <img src={woman}  class="img-thumbnail"/>
                        <h4 class="my-3">Women</h4>
                      
                    </div>
                    <div class="col-md-4">
                         <img src={men} alt="..." class="img-thumbnail"/>
                         
                       
                        <h4 class="my-3">Mens</h4>
                       
                    </div>
                    <div class="col-md-4">
                         <img src={kid} alt="..." class="img-thumbnail"/>
                        
                        <h4 class="my-3">Kids</h4>
                       
                    </div>
                </div>


    </section>


    <section id="arrival">
        <div class="row">
            <div class="col-md-12 col-sm-12">
                 <h2 class="section-heading text-uppercase text-center">New Arrival</h2>
            </div>
        </div>

         <div class="row text-center">
                    <div class="col-lg-3 col-sm-3 mb-4">
                      
                        <div class="card">
                            <a class="card-img-top">
                                
                                <img class="img-fluid" src={dress1} alt="..." />
                            </a>
                            <div class="card-title">
                                <div class="font-weight-bold">Threads</div>
                                <div class="card-body text-muted">Illustration</div>
                                <div class="font-weight-bold">Threads</div>
                            </div>
                        </div>
                    </div>


                    <div class="col-lg-3 col-sm-3 mb-4">
                        
                        <div class="card">
                            <a class="card-img-top">
                                
                                <img class="img-fluid" src={dress2} alt="..." />
                            </a>
                            <div class="card-title">
                                <div class="font-weight-bold">Threads</div>
                                <div class="card-body text-muted">Illustration</div>
                                <div class="font-weight-bold">Threads</div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-sm-3 mb-4">
                    
                        <div class="card">
                            <a class="card-img-top">
                                
                                <img class="img-fluid" src={dress3} alt="..." />
                            </a>
                            <div class="card-title">
                                <div class="font-weight-bold">Threads</div>
                                <div class="card-body text-muted">Illustration</div>
                                <div class="font-weight-bold">Threads</div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-sm-3 mb-4">
                       
                        <div class="card">
                            <a class="card-img-top">
                                
                                <img class="img-fluid" src={dress4} alt="..." />
                            </a>
                            <div class="card-title">
                                <div class="font-weight-bold">Threads</div>
                                <div class="card-body text-muted">Illustration</div>
                                <div class="font-weight-bold">Threads</div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-sm-3 mb-4">
                        
                      
                    </div>

                </div>


    </section>


    <section id="offer">
        <div class="row">
            <div class="col-md-12 col-sm-12" id="offercaraousel">
                <div class="text-center" id="forColor">
                    <h2 class="text-light text-uppercase text-center">New Customer Exclusive</h2>
                    <h3 class="text-light font-weight-normal text-center">Access Designer Deals On Of Pre-Loved Clothing And Accessories.</h3>

                     
                

                </div>
                
                
                <div class="row">
                      <div class="col-md-12 col-sm-12 text-center">
                     <button class="btn btn-light text-primary btn-browse " >Browse Now</button>
                </div>
                    
                </div>
            </div>
        </div>

    </section>
        </div>
    )
}

export default Home
