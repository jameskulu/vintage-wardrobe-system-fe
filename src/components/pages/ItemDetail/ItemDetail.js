import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import NoImage from '../../../images/noimage.jpg';
import 'react-datepicker/dist/react-datepicker.css';
import { toast } from 'react-toastify';
import './itemDetails.css';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import User from '../../../images/user.png';
import UserContext from '../../../context/UserContext';
import CartContext from '../../../context/CartContext';
import ReactStars from 'react-rating-stars-component';
import './review.css';

const ItemDetail = (props) => {
    const history = useHistory();
    const { userData } = useContext(UserContext);
    const { cartData, setCartData } = useContext(CartContext);

    const [singleItem, setSingleItem] = useState([]);
    const [reviews, setReviews] = useState([]);
    const itemId = props.match.params.itemId;

    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;

    const [isAdded, setIsAdded] = useState();
    const [isWishlist, setIsWishlist] = useState();
    const [isReviewed, setIsReviewed] = useState();
    const [review, setReview] = useState();
    const [rating, setRating] = useState();

    let items = JSON.parse(localStorage.getItem('cart')) || [];

    useEffect(() => {
        const loadSingleItem = async () => {
            axios
                .get(`${process.env.REACT_APP_API_URL}/api/items/${itemId}`)
                .then(async (singleItemResponse) => {
                    setSingleItem(singleItemResponse.data.data);

                    if (
                        items.some(
                            (item) =>
                                item.id === singleItemResponse.data.data.id
                        )
                    ) {
                        setIsAdded(true);
                    } else {
                        setIsAdded(false);
                    }

                    const token = localStorage.getItem('auth-token');
                    const wishlist = await axios.get(
                        `${process.env.REACT_APP_API_URL}/api/users/wishlist`,
                        { headers: { Authorization: 'Bearer ' + token } }
                    );
                    if (
                        wishlist.data.data.some(
                            (item) =>
                                item.itemId === singleItemResponse.data.data.id
                        )
                    ) {
                        setIsWishlist(true);
                    } else {
                        setIsWishlist(false);
                    }
                });
        };

        const loadReviews = async () => {
            const token = localStorage.getItem('auth-token');
            const reviewResponse = await axios.get(
                `${process.env.REACT_APP_API_URL}/api/reviews/${itemId}`,
                { headers: { Authorization: 'Bearer ' + token } }
            );
            setReviews(reviewResponse.data.data);

            const itemReviewResponse = await axios.get(
                `${process.env.REACT_APP_API_URL}/api/reviews/reviewed`,
                { headers: { Authorization: 'Bearer ' + token } }
            );

            const userResponse = await axios.get(
                `${process.env.REACT_APP_API_URL}/api/users`,
                { headers: { Authorization: 'Bearer ' + token } }
            );

            if (
                itemReviewResponse.data.data.some(
                    (review) =>
                        review.itemId === itemId &&
                        review.userId === userResponse.data.id &&
                        review.isReviewed === false
                )
            ) {
                setIsReviewed(true);
            } else {
                setIsReviewed(false);
            }
        };

        loadReviews();
        loadSingleItem();
    }, []);

    const ratingChanged = (newRating) => {
        setRating(newRating);
    };

    const addToCart = () => {

        if (userData.user && userData.user.id === singleItem.user.id) {
            return toast.error('Cannot add your own item to cart');
        }

        if (dateRange.includes(null)) {
            return toast.error('Please select a date range.');
        }

        const days =
            parseInt((endDate - startDate) / (1000 * 60 * 60 * 24), 10) + 1;
        const totalPrice = parseFloat(singleItem.price * days);

        if (items.every((item) => item.id !== singleItem.id)) {
            items.push({ ...singleItem, startDate, endDate, days, totalPrice });
            setIsAdded(true);
        }
        localStorage.setItem('cart', JSON.stringify(items));
        toast.success('Item added to cart.');
        setCartData(items.length);
    };

    const removeFromCart = () => {
        setIsAdded(false);
        setDateRange([null, null]);
        const filteredItems = items.filter((item) => {
            return item.id !== singleItem.id;
        });
        localStorage.setItem('cart', JSON.stringify(filteredItems));
        toast.success('Item removed from cart.');
        setCartData(filteredItems.length);
    };

    const addToWishlist = async () => {
        if (userData.user === undefined) {
            return history.push('/login');
        }

        try {
            const data = {
                itemId,
            };
            const token = localStorage.getItem('auth-token');
            await axios.post(
                `${process.env.REACT_APP_API_URL}/api/users/wishlist/add`,
                data,
                { headers: { Authorization: 'Bearer ' + token } }
            );
            setIsWishlist(true);
            toast.success('Added to wishlist.');
        } catch (err) {
            toast.error(err.response.data.message);
        }
    };

    const removeFromWishlist = async () => {
        try {
            const token = localStorage.getItem('auth-token');
            await axios.delete(
                `${process.env.REACT_APP_API_URL}/api/users/wishlist/remove/${itemId}`,
                { headers: { Authorization: 'Bearer ' + token } }
            );
            setIsWishlist(false);
            toast.success('Removed from wishlist.');
        } catch (err) {
            toast.error(err.response.data.message);
        }
    };

    const addReview = async () => {
        try {
            const token = localStorage.getItem('auth-token');
            const newReview = {
                text: review,
                rating,
                itemId,
            };
            await axios.post(
                `${process.env.REACT_APP_API_URL}/api/reviews/new`,
                newReview,
                { headers: { Authorization: 'Bearer ' + token } }
            );
            const reviewResponse = await axios.get(
                `${process.env.REACT_APP_API_URL}/api/reviews/${itemId}`,
                { headers: { Authorization: 'Bearer ' + token } }
            );
            setReviews(reviewResponse.data.data);
            setIsReviewed(false);
            toast.success('Review is added successfully.');
        } catch (err) {
            toast.error(err.response.data.message);
        }
    };

    return (
        <div className="outer-item-detail">
            <div className="item-detail">
                <section className="heading">
                    <div className="row">
                        <div className="col-md-12 col-sm-12">
                            <div className="text-center">
                                <h3 className="text-light text-uppercase text-center">
                                    Product Details
                                </h3>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="container-fluid text-center">
                    <div className="row">
                        <div className="col-md-7 image">
                            <div className="col-xs-4 col-md-3 mt-md-0 mt-3 imgslider">
                                <ul>
                                    {singleItem.images ? (
                                        singleItem.images.length > 0 ? (
                                            <li>
                                                <a href="#slide1">
                                                    <img
                                                        src={
                                                            singleItem.images[0]
                                                                .imageURL
                                                        }
                                                        alt=""
                                                    />
                                                </a>
                                            </li>
                                        ) : (
                                            <li>
                                                <a href="#slide1">
                                                    <img src={NoImage} alt="" />
                                                </a>
                                            </li>
                                        )
                                    ) : null}

                                    {singleItem.images ? (
                                        singleItem.images.length > 1 ? (
                                            <li>
                                                <a href="#slide2">
                                                    <img
                                                        src={
                                                            singleItem.images[1]
                                                                .imageURL
                                                        }
                                                        alt=""
                                                    />
                                                </a>
                                            </li>
                                        ) : null
                                    ) : null}

                                    {singleItem.images ? (
                                        singleItem.images.length > 2 ? (
                                            <li>
                                                <a href="#slide3">
                                                    <img
                                                        src={
                                                            singleItem.images[2]
                                                                .imageURL
                                                        }
                                                        alt=""
                                                    />
                                                </a>
                                            </li>
                                        ) : null
                                    ) : null}
                                </ul>
                            </div>

                            <div className="col-xs-12 col-sm-9 col-md-9 mt-md-0 mt-3 productimg text-center">
                                <ul class="main-detail-image-ul">
                                    {singleItem.images ? (
                                        singleItem.images.length > 0 ? (
                                            <li id="slide1">
                                                <img
                                                    src={
                                                        singleItem.images[0]
                                                            .imageURL
                                                    }
                                                    alt=""
                                                />
                                            </li>
                                        ) : (
                                            <li id="slide1">
                                                <img src={NoImage} alt="" />
                                            </li>
                                        )
                                    ) : null}

                                    {singleItem.images ? (
                                        singleItem.images.length > 1 ? (
                                            <li id="slide2">
                                                <img
                                                    src={
                                                        singleItem.images[1]
                                                            .imageURL
                                                    }
                                                    alt=""
                                                />
                                            </li>
                                        ) : null
                                    ) : null}

                                    {singleItem.images ? (
                                        singleItem.images.length > 2 ? (
                                            <li id="slide3">
                                                <img
                                                    src={
                                                        singleItem.images[2]
                                                            .imageURL
                                                    }
                                                    alt=""
                                                />
                                            </li>
                                        ) : null
                                    ) : null}
                                </ul>
                            </div>
                        </div>

                        <div
                            className="
                        col-xs-12 col-md-5
                        mt-md-0 mt-3
                        product-detail
                        text-left
                    "
                        >
                            <div className="rating">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="far fa-star"></i>
                            </div>
                            <div className="product-info">
                                <div className="pname">
                                    <h3>{singleItem.name}</h3>

                                    {isWishlist ? (
                                        <i
                                            onClick={removeFromWishlist}
                                            className="fas fa-heart"
                                            id="filled-heart-icon"
                                        ></i>
                                    ) : (
                                        <i
                                            onClick={addToWishlist}
                                            className="far fa-heart"
                                        ></i>
                                    )}
                                </div>
                                <i className="fas fa-tag"></i>{' '}
                                {singleItem.subCategory
                                    ? singleItem.subCategory.name
                                    : ''}
                                <hr />
                                <p>{singleItem.description}</p>
                                <hr />
                                <p>
                                    <strong>Color :</strong> {singleItem.color}
                                </p>
                                <p>
                                    <strong>Size :</strong> {singleItem.size}
                                </p>
                                <p className='mt-4'>
                                    <span className="font-weight-bold">
                                        Rs. {singleItem.price}
                                    </span>{' '}
                                    original retail
                                </p>
                                <h6 className="mt-3">Rented By:</h6>
                                <div className="seller">
                                    <img
                                        src={
                                            singleItem.user
                                                ? singleItem.user
                                                      .profilePicURL === null
                                                    ? User
                                                    : singleItem.user
                                                          .profilePicURL
                                                : null
                                        }
                                        width="120px"
                                        ascpect-ratio="1/1"
                                        alt=""
                                    />
                                    <span>
                                        {singleItem.user
                                            ? singleItem.user.firstName
                                            : ''}{' '}
                                        {singleItem.user
                                            ? singleItem.user.lastName
                                            : ''}
                                    </span>
                                </div>
                            </div>
                            <hr />
                            <div className="rent-detail">
                                <div className="top">
                                    <div className="detail">
                                        <h6>One-Time Rental</h6>
                                        <br></br>
                                        <h8>Mentioned price above is per day</h8>
                                        <br></br>
                                        <h8>Select number of days for rent below;</h8>
                                    </div>
                                    <div className="detailimg">
                                        {singleItem.images ? (
                                            singleItem.images.length > 1 ? (
                                                <img
                                                    src={
                                                        singleItem.images[0]
                                                            .imageURL
                                                    }
                                                    alt=""
                                                />
                                            ) : null
                                        ) : null}
                                    </div>
                                </div>

                                <div className="bottom">
                                    <div className="bottom">
                                        {singleItem.isAvailable ? (
                                            <>
                                                <h5>DELIVERY + RETURN DATES</h5>

                                                <DatePicker
                                                    dateFormat="dd/MM/yyyy"
                                                    minDate={new Date()}
                                                    filterDate={(date) =>
                                                        date.getDay() !== 6 &&
                                                        date.getDay() !== 0
                                                    }
                                                    showYearDropdown
                                                    scrollableYearDropdown
                                                    selectsRange={true}
                                                    startDate={startDate}
                                                    endDate={endDate}
                                                    onChange={(update) => {
                                                        setDateRange(update);
                                                    }}
                                                    withPortal
                                                />
                                                <div className="bottom-btn">
                                                    {isAdded ? (
                                                        <button
                                                            className="add-cart"
                                                            onClick={
                                                                removeFromCart
                                                            }
                                                        >
                                                            <i className="fas fa-shopping-cart"></i>
                                                            Remove from Cart
                                                        </button>
                                                    ) : (
                                                        <button
                                                            className="add-cart"
                                                            onClick={addToCart}
                                                        >
                                                            <i className="fas fa-shopping-cart"></i>
                                                            Add to Cart
                                                        </button>
                                                    )}
                                                </div>
                                            </>
                                        ) : (
                                            <p>
                                                This item is currently not
                                                available
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="review-container">
                {isReviewed ? (
                    <div class="container  text-center align-items-center review-box">
                        <div class="row  rating-field col-lg-8 offset-lg-2 ">
                            <div>
                                <h5 class="title-text text-left mb-3">
                                    Give Reviews
                                </h5>

                                <div class="row border">
                                    <div class="stars">
                                        <ReactStars
                                            size={30}
                                            starSpacing="15px"
                                            count={5}
                                            value={rating}
                                            onChange={ratingChanged}
                                            activeColor="#ffd700"
                                        />
                                    </div>
                                    <textarea
                                        value={review}
                                        onChange={(e) =>
                                            setReview(e.target.value)
                                        }
                                        class="form-control form-control-lg review-field"
                                        placeholder="Enter your review here"
                                    ></textarea>

                                    <button
                                        type="button"
                                        class="btn btn-review"
                                        onClick={addReview}
                                    >
                                        Share Review
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : null}

                <div class="container col-md-12 review-section">
                    <h5 class="title-text ml-4"> Rating and Reviews</h5>

                    {reviews.length > 0 ? (
                        <>
                            {reviews.map((review) => (
                                <div class="row border rating-field ">
                                    <div class="col-md-0 user-details">
                                        <img
                                            src={
                                                review.user.profilePicURL ===
                                                null
                                                    ? User
                                                    : review.user.profilePicURL
                                            }
                                            class="rounded-circle user-img"
                                            alt="Cinque Terre"
                                        />
                                        <p>
                                            {review.user.firstName}{' '}
                                            {review.user.lastName}
                                        </p>
                                    </div>

                                    <div class="col-md-10 text-left user-review">
                                        <div class="row">
                                            <span className="ml-3">
                                                <ReactStars
                                                    value={review.rating}
                                                    size={30}
                                                    edit={false}
                                                ></ReactStars>
                                            </span>

                                            <div>
                                                <p class="review-date">
                                                    {review.createdAt}
                                                </p>
                                            </div>
                                        </div>

                                        <p className="review-text">
                                            {review.text}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </>
                    ) : (
                        <p className="mt-4 ml-4">
                            <strong>No reviews available.</strong>
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;
