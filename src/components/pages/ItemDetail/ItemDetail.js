import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './itemDetails.css';
import d from '../../../images/d.jpg';
import d1 from '../../../images/d1.jpg';
import d2 from '../../../images/d2.jpg';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { toast } from 'react-toastify';

const ItemDetail = (props) => {
    const [singleItem, setSingleItem] = useState([]);
    const itemId = props.match.params.itemId;

    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;

    const [isAdded, setIsAdded] = useState();

    let items = JSON.parse(localStorage.getItem('cart')) || [];

    useEffect(() => {
        const loadSingleItem = async () => {
            axios
                .get(`${process.env.REACT_APP_API_URL}/api/items/${itemId}`)
                .then((singleItemResponse) => {
                    setSingleItem(singleItemResponse.data.data);
                    console.log(singleItemResponse.data.data)

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
                });
        };
        loadSingleItem();
    }, []);

    const addToCart = () => {
        const days =
            parseInt((endDate - startDate) / (1000 * 60 * 60 * 24), 10) + 1;
        const totalPrice = singleItem.price * days;

        if (items.every((item) => item.id !== singleItem.id)) {
            items.push({ ...singleItem, startDate, endDate, days, totalPrice });
            setIsAdded(true);
        }
        localStorage.setItem('cart', JSON.stringify(items));
        toast.success('Item added to cart.');
    };

    const removeFromCart = () => {
        setIsAdded(false);
        const filteredItems = items.filter((item) => {
            return item.id !== singleItem.id;
        });
        localStorage.setItem('cart', JSON.stringify(filteredItems));
        toast.success('Item removed from cart.');
    };

    return (
        <div className="item-detail">
            <section className="heading">
                <div className="row">
                    <div className="col-md-12 col-sm-12">
                        <div className="text-center">
                            <h3 className="text-light text-uppercase text-center ">
                                Product Details
                            </h3>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container-fluid text-center ">
                <div className="row">
                    <div className="col-sm-3 col-md-2 mt-md-0 mt-3 imgslider">
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

                    <div className=" col-sm-9 col-md-6 mt-md-0 mt-3 productimg  text-center">
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

                    <div className=" col-sm-12 col-md-4 mt-md-0 mt-3 product-detail text-left ">
                        <div className="rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="far fa-star"></i>
                        </div>
                        <div className="product-info ">
                            <div className="pname">
                                <h3>{singleItem.name}</h3>
                                <i className="far fa-heart"></i>
                            </div>
                            <h5>Printed Leona Dress</h5>
                            <p>{singleItem.description}</p>
                            <span>{singleItem.price} orginal retail</span>
                            <h4>Sold By:</h4>
                            <div className="seller">
                                <img
                                    src={d2}
                                    width="120px"
                                    ascpect-ratio="1/1"
                                    alt=""
                                />
                                <p>Name: </p>
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
                                    <img src={d} alt="" />
                                </div>
                            </div>
                            <div className="bottom">
                                {singleItem.isAvailable ? (
                                    <>
                                        <h5>DELIVERY + RETURN DATES</h5>
                                        {/* <div className="date-info">
                                    <i className="far fa-calendar"></i>
                                </div> */}
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
                                    <p>This item is currently not available</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;
