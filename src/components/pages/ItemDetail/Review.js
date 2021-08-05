import ReactStars from 'react-rating-stars-component';
import React from 'react';
import './review.css'
import morrison from '../../../images/morrison.jpg'


const Review = () => {

    const ratingChanged = (newRating) => {
        console.log(newRating);
      };

    return(
    <div class="review-container">

        
        <div class="container  text-center align-items-center review-box">
            
           
            <div class= "row  rating-field col-lg-8 offset-lg-2 ">
                <div>
                    <h5 class="title-text text-left"> Give Reviews</h5>

                    <div class="row border">
                    <div class="stars">
                    <ReactStars
                        starSpacing="15px"
                        count={5}
                        onChange={ratingChanged}
                        size={50}
                        activeColor="#ffd700"
                    />,
                    </div>
                    <input class="form-control form-control-lg review-field " type="text" placeholder="Enter your review here"></input>
                    
                        <button type="button" class="btn btn-review ">Share Review</button>

                    </div>

                </div>
 
            </div> 
        </div>

        <div class="container col-md-12 review-section">
            <h5 class="title-text"> Rating and Reviews</h5>
            <div class= "row border rating-field ">

                <div class="col-md-0 user-details">
                    <img src={morrison} class="rounded-circle user-img" alt="Cinque Terre"/>
                    <p >Jim Morrison</p>
                </div>
                
                <div class="col-md-10 text-left user-review">
                    <div class="row">
                                <ReactStars
                                    size={30}
                                    >
                                </ReactStars>
           
                            <div >
                                <p class="review-date">June 21, 2021</p>

                            </div>

                    </div>
   
                <p>Absolutely loved this dress!! Perfect for a summer wedding. I usually wear a size 6 but ended up wearing the 4. I would recommending sizing down.</p>
                </div>
   
            </div> 

           
        </div>

    </div>
    )
}

export default Review