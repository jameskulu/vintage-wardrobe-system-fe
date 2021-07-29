import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="row">
                <div className="col-md-12 col-sm-12">
                    <div className="row">
                        <div className="col-md-12 col-sm-12 text-center">
                            <i className="fab fa-facebook"></i>
                            <i className="fab fa-instagram"></i>
                            <i className="fab fa-twitter"></i>
                        </div>
                    </div>

                    <div className="container-fluid text-center ">
                        <div className="row">
                            <div className="col-md-4 mt-md-0 mt-3">
                                <div className="list-group">
                                    <p className="list-group-item list-heading">
                                        Information
                                    </p>
                                    <Link to="#" className="list-group-item ">
                                        About Us
                                    </Link>
                                    <Link to="#" className="list-group-item ">
                                        More Search
                                    </Link>
                                </div>
                            </div>

                            <div className="col-md-4 mb-md-0 mb-3">
                                <div className="list-group">
                                    <p className="list-group-item list-heading">
                                        Rentals
                                    </p>
                                    <Link to="/add/item" className="list-group-item ">
                                        Upload an Item
                                    </Link>
                                    <Link to="#" className="list-group-item ">
                                        Items For Rent
                                    </Link>
                                    <Link to="#" className="list-group-item ">
                                        Rent Orders
                                    </Link>
                                </div>
                            </div>

                            <div className="col-md-4 mt-md-0 mt-3">
                                <div className="list-group">
                                    <p className="list-group-item list-heading">
                                        Profile
                                    </p>
                                    <Link to="#" className="list-group-item ">
                                        My Profiles
                                    </Link>

                                    <Link to="/orders" className="list-group-item ">
                                        My Orders
                                    </Link>
                                </div>
                            </div>
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
        </footer>
    );
};

export default Footer;
