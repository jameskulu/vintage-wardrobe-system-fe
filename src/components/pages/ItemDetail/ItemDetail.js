import axios from "axios"
import React, { useEffect, useState } from "react"
import './itemDetails.css'
import d from '../../../images/d.jpg';
import d1 from '../../../images/d1.jpg';
import d2 from '../../../images/d2.jpg';

const ItemDetail = (props) => {
    const [singleItem, setSingleItem] = useState([])
    const itemId = props.match.params.itemId
    useEffect(()=>{
        const loadSingleItem = async () => {
            const singleItemResponse = await axios.get(`${process.env.REACT_APP_API_URL}/api/items/${itemId}`)
            setSingleItem(singleItemResponse.data.data)
        }
        loadSingleItem()
    })

    return(

        <div>

            <section class ="heading">
                <div class="row">
                    <div class="col-md-12 col-sm-12" >
                        <div class="text-center" >
                            <h3 class="text-light text-uppercase text-center ">Product Details</h3>

                        </div>
                    </div>
                </div>

            </section>

            <div class="container-fluid text-center ">

                  
        <div class="row">
          <div class="col-sm-3 col-md-2 mt-md-0 mt-3 imgslider">
            <ul>
              <li>
                <a href="#slide1"><img src={d} /></a>
              </li>
              <li>
                <a href="#slide2"><img src={d1} /></a>
              </li>
              <li>
                <a href="#slide3"><img src={d2} /></a>
              </li>
            </ul>

            </div>

            <div class= " col-sm-9 col-md-6 mt-md-0 mt-3 productimg  text-center">
              <ul>
                <li id="slide1"><img src={d} /></li>
                <li id="slide2"><img src={d1} /></li>
                <li id="slide3"><img src={d2} /></li>
              </ul>

            </div>


            <div class= " col-sm-12 col-md-4 mt-md-0 mt-3 product-detail text-left ">
              <div class="rating">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
              </div>
              <div class="product-info ">
                <div class="pname">
                  <h3>{singleItem.name}</h3>
                  <i class="far fa-heart"></i>
                </div>
                <h5>Printed Leona Dress</h5>
                <p>
                  {singleItem.description}
                </p>
              <span>{singleItem.price} orginal retail</span>
              <h4>Sold By:</h4>
              <div class="seller">
                <img src={d2} width="120px" ascpect-ratio="1/1"/>
              <p>Name: John Doe</p>
              </div>
            </div>
            <hr />
            <div class="rent-detail">
                <div class="top">
                  <div class="detail">
                    <h6>One-Time Rental</h6>
                    <p>Rent for 4 Days</p>
                    <h6>$40 - $60</h6>
                  </div>
                  <div class="detailimg">
                    <img src={d} />
                  </div>
                </div>
                <div class="bottom">
                    <h5>DELIVERY + RETURN DATES</h5>
                    <div class="date-info"><i class="far fa-calendar"></i></div>
                    <div class="bottom-btn">
                    <button id="add-cart"><i class="fas fa-shopping-cart"></i>Add to Cart</button>
                    </div>
                </div>
            </div>
             

            </div>



          </div>


        </div>




        </div>
       
    )
}

export default ItemDetail


