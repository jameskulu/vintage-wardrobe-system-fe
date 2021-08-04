import ReactStars from 'react-rating-stars-component';
import React from 'react';
import './review.css'
import morrison from '../../../images/morrison.jpg'


const Review = () => {

    const ratingChanged = (newRating) => {
        console.log(newRating);
      };

    return(
    <div>

        
        <div class="container review-box">
        <h5 class="title-text"> Give Reviews</h5>
            <div class= "row border rating-field  col-md-5">
                    <ReactStars
                        count={5}
                        onChange={ratingChanged}
                        size={50}
                        activeColor="#ffd700"
                    />,
                    <input class="form-control form-control-lg review-field " type="text" placeholder="Enter your review here"></input>
                    
                        <button type="button" class="btn btn-review ">Share Review</button>
                   
            </div> 
        </div>

        <div class="container review-section">
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