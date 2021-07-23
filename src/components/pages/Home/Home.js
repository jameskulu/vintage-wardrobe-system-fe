import React, { useEffect, useState } from 'react';
import './home.css';
import woman from '../../../images/woman.jpg';
import kids from '../../../images/kids.png';
import men from '../../../images/men.jpg';
import dress1 from '../../../images/dress1.jpg';
import dress2 from '../../../images/dress2.jpg';
import dress3 from '../../../images/dress3.jpg';
import dress4 from '../../../images/dress4.jpg';
import axios from 'axios';
import Item from './Item';
import { Link } from 'react-router-dom';

const Home = () => {
    const [latestItems, setLatestItems] = useState([]);

    useEffect(() => {
        const displayItems = async () => {
            const itemResponse = await axios.get(
                `${process.env.REACT_APP_API_URL}/api/items/`
            );
            const sortedItemResponse = itemResponse.data.data.reverse();
            setLatestItems(sortedItemResponse);
        };
        displayItems();
    }, []);

    return (
        <div class="homepage">
            <section className="bg">
                <div className="container ">
                    <div className="row h-100">
                        <div className="col-md-12 col-sm-12 text-center my-auto">
                            <Link to="/renter/items/add">
                                <button className="">Rent your Clothes</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section id="rent">
                <div className="row mt-5">
                    <div className="col-md-12 col-sm-12">
                        <h2>Rent Clothing</h2>
                    </div>
                </div>

                <div className="row text-center">
                    <div className="col-md-4">
                        <img
                            src={woman}
                            className="img-thumbnail"
                            alt={woman}
                        />
                        <h4 className="my-3">Women</h4>
                    </div>
                    <div className="col-md-4">
                        <img src={men} alt="..." className="img-thumbnail" />
                        <h4 className="my-3">Mens</h4>
                    </div>
                    <div className="col-md-4">
                        <img src={kids} alt="..." className="img-thumbnail " />

                        <h4 className="my-3">Kids</h4>
                    </div>
                </div>
            </section>

            <div className="container outer-latest-released">
                <h2>Latest Released</h2>

                <div className="latest-released">
                    <Item items={latestItems} />
                </div>
            </div>

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
