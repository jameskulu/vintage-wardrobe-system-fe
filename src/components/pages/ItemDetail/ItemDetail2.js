import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import d from '../../../images/d.jpg';
import d1 from '../../../images/d1.jpg';
import d2 from '../../../images/d2.jpg';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { toast } from 'react-toastify';
import './itemDetails.css';
import { Link } from 'react-router-dom';
import UserContext from '../../../context/UserContext';

const ItemDetail = (props) => {
    const { userData } = useContext(UserContext);
    const [singleItem, setSingleItem] = useState([]);
    const [reviews, setReviews] = useState([]);
    const itemId = props.match.params.itemId;

    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;

    const [isAdded, setIsAdded] = useState();
    const [isWishlist, setIsWishlist] = useState();
    const [isReviewed, setIsReviewed] = useState();
    const [review, setReview] = useState();

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
            const sortedReviewsResponse = reviewResponse.data.data.reverse();
            setReviews(sortedReviewsResponse);

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

    const addToCart = () => {
        console.log(dateRange);
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
    };

    const removeFromCart = () => {
        setIsAdded(false);
        setDateRange([null, null]);
        const filteredItems = items.filter((item) => {
            return item.id !== singleItem.id;
        });
        localStorage.setItem('cart', JSON.stringify(filteredItems));
        toast.success('Item removed from cart.');
    };

    const addToWishlist = async () => {
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
                rating: 5,
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
            const sortedReviewsResponse = reviewResponse.data.data.reverse();
            setReviews(sortedReviewsResponse);
            setIsReviewed(false)
            toast.success('Review is added successfully.');
        } catch (err) {
            toast.error(err.response.data.message);
        }
    };

    return (
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
                                <li>
                                    <a href="#slide1">
                                        <img src={d} alt="" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#slide2">
                                        <img src={d1} alt="" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#slide3">
                                        <img src={d2} alt="" />
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div
                            className="
                            col-xs-12 col-sm-9 col-md-9
                            mt-md-0 mt-3
                            productimg
                            text-center
                        "
                        >
                            <ul>
                                <li id="slide1">
                                    <img src={d} alt="" />
                                </li>
                                <li id="slide2">
                                    <img src={d1} alt="" />
                                </li>
                                <li id="slide3">
                                    <img src={d2} alt="" />
                                </li>
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
                            <Link to="">
                                {singleItem.subCategory
                                    ? singleItem.subCategory.name
                                    : ''}
                            </Link>
                            <p>{singleItem.description}</p>
                            <span>Rs. {singleItem.price} original retail</span>
                            <h5 className="mt-3">Rented By:</h5>
                            <div className="seller">
                                <img
                                    src={d1}
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
                                    <p>Rent for 4 Days</p>
                                    <h6>$40 - $60</h6>
                                </div>
                                <div className="detailimg">
                                    <img src={d1} alt="" />
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
                                                        onClick={removeFromCart}
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
                                            This item is currently not available
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <h3>Review</h3>

            {isReviewed ? (
                <>
                    <input
                        type="text"
                        value={review}
                        onChange={(e) => setReview(e.target.value)}
                    />
                    <button onClick={addReview}>Add review</button>
                </>
            ) : null}

            <div>
                {reviews.map((review) => (
                    <div>
                        <h4>
                            {review.user.firstName} {review.user.lastName}
                        </h4>
                        <p>{review.text}</p>
                        <p>Rating: {review.rating}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ItemDetail;