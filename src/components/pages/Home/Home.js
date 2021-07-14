import React from 'react';
import './home.css';
import woman from '../../../images/woman.jpg';
import kid from '../../../images/kids.png';
import men from '../../../images/men.png';
import dress1 from '../../../images/dress1.jpg';
import dress2 from '../../../images/dress2.jpg';
import dress3 from '../../../images/dress3.jpg';
import dress4 from '../../../images/dress4.jpg';

const Home = () => {
    return (
        <div class="homepage">
            <section className="bg">
                <div className="container ">
                    <div className="row h-100">
                        <div className="col-md-12 col-sm-12 text-center my-auto">
                            <button className="">Rent your Clothes</button>
                        </div>
                    </div>
                </div>
            </section>

            <section id="rent">
                <div className="row">
                    <div className="col-md-12 col-sm-12">
                        <h2 className="text-center">Rent Clothing</h2>
                    </div>
                </div>

                <div className="row text-center">
                    <div className="col-md-4">
                        <img src={woman} className="img-thumbnail" />
                        <h4 className="my-3">Women</h4>
                    </div>
                    <div className="col-md-4">
                        <img src={men} alt="..." className="img-thumbnail" />
                        <h4 className="my-3">Mens</h4>
                    </div>
                    <div className="col-md-4">
                        <img src={kid} alt="..." className="img-thumbnail" />

                        <h4 className="my-3">Kids</h4>
                    </div>
                </div>
            </section>

            <section id="arrival" className="mt-5">
                <div className="row">
                    <div className="col-md-12 col-sm-12">
                        <h2 className="text-center">New Arrival</h2>
                    </div>
                </div>

                <div className="row text-center">
                    <div className="col-lg-3 col-sm-3 mb-4">
                        <div className="card">
                            <a className="card-img-top">
                                <img
                                    className="img-fluid"
                                    src={dress1}
                                    alt="..."
                                />
                            </a>
                            <div className="card-title">
                                <div className="font-weight-bold">Threads</div>
                                <div className="card-body text-muted">
                                    Illustration
                                </div>
                                <div className="font-weight-bold">Threads</div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-3 mb-4">
                        <div className="card">
                            <a className="card-img-top">
                                <img
                                    className="img-fluid"
                                    src={dress2}
                                    alt="..."
                                />
                            </a>
                            <div className="card-title">
                                <div className="font-weight-bold">Threads</div>
                                <div className="card-body text-muted">
                                    Illustration
                                </div>
                                <div className="font-weight-bold">Threads</div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-3 mb-4">
                        <div className="card">
                            <a className="card-img-top">
                                <img
                                    className="img-fluid"
                                    src={dress3}
                                    alt="..."
                                />
                            </a>
                            <div className="card-title">
                                <div className="font-weight-bold">Threads</div>
                                <div className="card-body text-muted">
                                    Illustration
                                </div>
                                <div className="font-weight-bold">Threads</div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-3 mb-4">
                        <div className="card">
                            <a className="card-img-top">
                                <img
                                    className="img-fluid"
                                    src={dress4}
                                    alt="..."
                                />
                            </a>
                            <div className="card-title">
                                <div className="font-weight-bold">Threads</div>
                                <div className="card-body text-muted">
                                    Illustration
                                </div>
                                <div className="font-weight-bold">Threads</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="offer">
                <div className="row">
                    <div className="col-md-12 col-sm-12" id="offercaraousel">
                        <div className="text-center" id="forColor">
                            <h2>New Customer Exclusive</h2>
                            <h3>
                                Access Designer Deals On Of Pre-Loved Clothing
                                And Accessories.
                            </h3>
                        </div>

                        <div className="row">
                            <div className="col-md-12 col-sm-12 text-center">
                                <button className="">Browse Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
