import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './view-items.css';
import dress1 from '../../../../images/dress1.jpg';
import { toast } from 'react-toastify';
import swal from 'sweetalert';

const ViewItem = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const displayItems = async () => {
            const token = localStorage.getItem('auth-token');
            const itemResponse = await axios.get(
                `${process.env.REACT_APP_API_URL}/api/renter/items`,
                { headers: { Authorization: 'Bearer ' + token } }
            );
            const sortedItemResponse = itemResponse.data.data.reverse();
            setItems(sortedItemResponse);
        };
        displayItems();
    }, []);

    const onItemDelete = async (itemId) => {
        swal({
            title: 'Are you sure want to delete this item?',
            icon: 'warning',
            buttons: true,
            dangerMode: true,
        }).then(async (willDelete) => {
            if (willDelete) {
                try {
                    const token = localStorage.getItem('auth-token');

                    await axios.delete(
                        `${process.env.REACT_APP_API_URL}/api/renter/items/delete/${itemId}`,
                        { headers: { Authorization: 'Bearer ' + token } }
                    );

                    const itemResponse = await axios.get(
                        `${process.env.REACT_APP_API_URL}/api/renter/items`,
                        { headers: { Authorization: 'Bearer ' + token } }
                    );
                    const sortedItemResponse = itemResponse.data.data.reverse();
                    setItems(sortedItemResponse);

                    toast.success('Item has been deleted.');
                } catch (err) {
                    toast.error(err.response.data.message);
                }
            }
        });
    };

    return (
        <div className="view-items-container">
            <headings>
                <h2>My Items</h2>
            </headings>
            {items.length > 0 ? (
                <div className="table-responsive">
                    <table className="table">
                        <thead className="">
                            <tr>
                                <th scope="col"></th>
                                <th scope="col">Item</th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                                <th colspan="2" scope="col">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((item) => (
                                <tr>
                                    <td>
                                        <img
                                            src={dress1}
                                            className="img-fluid img-thumbnail"
                                            alt="Sheep"
                                        />
                                    </td>
                                    <td>
                                        <Link to={`/items/${item.id}`}>
                                            <p style={{ fontSize: '20px' }}>
                                                {item.name}
                                            </p>
                                        </Link>
                                        <p style={{fontWeight:"normal"}}>Rs. {item.price}</p>
                                    </td>
                                    <td></td>
                                    <td></td>

                                    <td id="iconedit">
                                        <Link
                                            to={`/renter/items/edit/${item.id}`}
                                        >
                                            <i className="fas fa-edit"></i>
                                        </Link>
                                    </td>
                                    <td id="icondel">
                                        <i
                                            onClick={() => {
                                                onItemDelete(item.id);
                                            }}
                                            className="fas fa-trash-alt"
                                        ></i>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <div className="empty-div">
                    <p>You have not uploaded any items for rent.</p>
                    <Link to="/renter/items/add">
                        <button className="btn">Add An Item</button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default ViewItem;
