import React, { useContext, useEffect, useState } from 'react';
import './home.css';
import woman from '../../../images/w.jpg';
import kids from '../../../images/kidss.jpg';
import men from '../../../images/man.png';
import axios from 'axios';
import Item from './Item';
import { Link } from 'react-router-dom';
import UserContext from '../../../context/UserContext';

const Home = () => {
    const [latestItems, setLatestItems] = useState([]);
    const { userData } = useContext(UserContext);

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
                            <Link to={userData.user === undefined ? '/login' : '/renter/items/add'}>
                                <button className="">Rent your clothes</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section id="rent">
                <div className="row mt-5">
                    <div className="col-md-12 col-sm-12">
                        <h2>Rent your clothing for</h2>
                    </div>
                </div>

                <div className="row text-center">
                    <div className="col-md-4">
                        <Link to="/category/Women">
                            <img
                                src={woman}
                                className="img-thumbnail"
                                alt={woman}
                            />
                        </Link>
                        <h4 className="my-3">Women</h4>
                    </div>
                    <div className="col-md-4">
                        <Link to="/category/Men">
                            <img
                                src={men}
                                alt="..."
                                className="img-thumbnail"
                            />
                        </Link>
                        <h4 className="my-3">Men</h4>
                    </div>
                    <div className="col-md-4">
                        <Link to="/category/Kids">
                            <img
                                src={kids}
                                alt="..."
                                className="img-thumbnail "
                            />
                        </Link>

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
                                Access Designer Deals on pre-loved clothing
                                and accessories.
                            </h3>
                        </div>

                        <div className="row">
                            <div className="col-md-12 col-sm-12 text-center m-2">
                                <Link to="/category/Men">
                                    <button className="">Browse Now</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
