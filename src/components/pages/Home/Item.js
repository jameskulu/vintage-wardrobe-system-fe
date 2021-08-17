import React from 'react';
import { Link } from 'react-router-dom';
import dress1 from '../../../images/dress1.jpg';
import NoImage from '../../../images/noimage.jpg';

const Items = ({ items }) => {
    console.log(items);
    return (
        <>
            {items.map((item) => (
                <div key={item.id} className="single-latest-released">
                    <Link to={`/items/${item.id}`}>
                        <img
                            src={
                                item.images.length < 1
                                    ? NoImage
                                    : item.images[0].imageURL
                            }
                            alt=""
                        />
                    </Link>
                    <div className="movie-info">
                        <h4>
                            <Link to={`/items/${item.id}`}>{item.name}</Link>
                        </h4>
                        <i className="fas fa-tag"></i>
                        <span>
                            <Link to={`genres/${item.genre}`}>
                                {item.subCategory ? item.subCategory.name : ''}
                            </Link>
                        </span>
                        <h6>Rs.{item.price}</h6>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Items;
