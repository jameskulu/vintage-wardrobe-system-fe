import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './footer.css';
import UserContext from '../../../context/UserContext';

const Footer = () => {
    const { userData } = useContext(UserContext);
    return (
        <footer>
            <div className="container-fluid text-center ">
                <div className="row">
                    <div className="col-md-12 col-sm-12">
                        <div className="row">
                            <div className="col-md-12 col-sm-12 text-center">
                                <i className="fab fa-facebook"></i>
                                <i className="fab fa-instagram"></i>
                                <i className="fab fa-twitter"></i>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-4 mt-md-0 mt-3">
                                <div className="list-group">
                                    <p className="list-group-item list-heading">
                                        Information
                                    </p>
                                    <Link
                                        to="/about-us"
                                        className="list-group-item "
                                    >
                                        About Us
                                    </Link>
                                    <Link to="/s" className="list-group-item ">
                                        More Search
                                    </Link>
                                </div>
                            </div>

                            <div className="col-md-4 mb-md-0 mb-3">
                                <div className="list-group">
                                    <p className="list-group-item list-heading">
                                        Rentals
                                    </p>

                                    <Link
                                        to="/cart"
                                        className="list-group-item "
                                    >
                                        My Cart
                                    </Link>
                                    <Link
                                        to="/category/Men"
                                        className="list-group-item "
                                    >
                                        Categories
                                    </Link>

                                    {userData.user !== undefined ? (
                                        <>
                                            <Link
                                                to="/renter/items/add"
                                                className="list-group-item "
                                            >
                                                Add An Item
                                            </Link>
                                            <Link
                                                to="/renter/items"
                                                className="list-group-item "
                                            >
                                                My Items
                                            </Link>
                                            <Link
                                                to="/renter/order"
                                                className="list-group-item "
                                            >
                                                Rent Orders
                                            </Link>
                                        </>
                                    ) : null}
                                </div>
                            </div>

                            <div className="col-md-4 mt-md-0 mt-3">
                                {userData.user !== undefined ? (
                                    <div className="list-group">
                                        <p className="list-group-item list-heading">
                                            Profile
                                        </p>
                                        <Link
                                            to="/profile"
                                            className="list-group-item "
                                        >
                                            Manage Profile
                                        </Link>

                                        

                                        <Link
                                            to="/orders"
                                            className="list-group-item "
                                        >
                                            My Orders
                                        </Link>

                                        <Link
                                            to="/wishlist"
                                            className="list-group-item "
                                        >
                                            My Wishlist
                                        </Link>

                                        <Link
                                            to="/change-password"
                                            className="list-group-item "
                                        >
                                            Change Password
                                        </Link>
                                    </div>
                                ) : (
                                    <div className="list-group">
                                        <p className="list-group-item list-heading">
                                            Accounts
                                        </p>
                                        <Link
                                            to="/signup"
                                            className="list-group-item "
                                        >
                                            Signup
                                        </Link>
                                        <Link
                                            to="/login"
                                            className="list-group-item "
                                        >
                                            Login
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <section className="copyright">
                    <div className="row">
                        <div className="col-md-12 col-sm-12">
                            <div className="text-center">
                                <p className="text-light text-uppercase text-center reserved">
                                    All Right Reserved
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </footer>
    );
};

export default Footer;
