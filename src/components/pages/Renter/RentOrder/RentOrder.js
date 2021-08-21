import './rentOrder.css';
import dress1 from '../../../../images/dress1.jpg';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import swal from 'sweetalert';
import { Link } from 'react-router-dom';
import NoImage from '../../../../images/noimage.jpg';

const RentOrder = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const getOrder = async () => {
            const token = localStorage.getItem('auth-token');
            const orderResponse = await axios.get(
                `${process.env.REACT_APP_API_URL}/api/renter/orders`,
                { headers: { Authorization: 'Bearer ' + token } }
            );
            const sortedOrderResponse = orderResponse.data.data.reverse();
            setOrders(sortedOrderResponse);
        };
        getOrder();
    }, []);

    const changeStatus = async (value, orderId) => {
        swal({
            title: 'Are you sure want to update the status?',
            icon: 'warning',
            buttons: true,
            dangerMode: false,
        }).then(async (willDelete) => {
            if (willDelete) {
                try {
                    const token = localStorage.getItem('auth-token');
                    await axios.post(
                        `${process.env.REACT_APP_API_URL}/api/renter/orders/${orderId}/status`,
                        { status: value },
                        { headers: { Authorization: 'Bearer ' + token } }
                    );
                    const orderedItems = await axios.get(
                        `${process.env.REACT_APP_API_URL}/api/renter/orders`,
                        { headers: { Authorization: 'Bearer ' + token } }
                    );
                    setOrders(orderedItems.data.data);
                    toast.success('Status changed.');
                } catch (err) {
                    toast.error('Something went wrong.');
                }
            }
        });
    };

    return (
        <div className="rent-orders-container">
            <headings>
                <h2>Rent Orders</h2>
            </headings>

            {orders.length > 0 ? (
                <div className="table-responsive">
                    <table class="table">
                        <thead class="thead-light">
                            <tr>
                                <th scope="col"></th>
                                <th scope="col">Item</th>
                                <th scope="col">Arrival- Return Date</th>
                                <th scope="col">Total</th>
                                <th scope="col">Status</th>
                                <th scope="col">Customer</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order) => (
                                <tr>
                                    <td>
                                        <Link to={`/items/${order.item.id}`}>
                                            <img
                                                class="img-fluid img-thumbnail"
                                                src={
                                                    order.item.images.length < 1
                                                        ? NoImage
                                                        : order.item.images[0]
                                                              .imageURL
                                                }
                                                alt=""
                                            />
                                        </Link>
                                    </td>
                                    <td>
                                        <Link to={`/items/${order.item.id}`}>
                                            <p class="text-uppercase">
                                                {order.item.name}
                                            </p>
                                        </Link>
                                        <p style={{ fontWeight: 'normal' }}>
                                            Rs. {order.item.price}
                                        </p>
                                    </td>
                                    <td>
                                        {order.startDate} - {order.endDate}
                                    </td>

                                    <td id="price">Rs. {order.totalPrice}</td>
                                    <td>
                                        <select
                                            className="form-control form-control-sm"
                                            value={order.status}
                                            onChange={(e) =>
                                                changeStatus(
                                                    e.target.value,
                                                    order.id
                                                )
                                            }
                                        >
                                            <option disabled value="pending">
                                                Pending
                                            </option>
                                            <option value="approved">
                                                Approved
                                            </option>
                                            <option value="refused">
                                                Refused
                                            </option>
                                            <option value="delivered">
                                                Delivered
                                            </option>
                                            <option value="received">
                                                Received
                                            </option>
                                        </select>
                                    </td>
                                    <td>
                                        <p>
                                            {order.user.firstName}{' '}
                                            {order.user.lastName}
                                        </p>
                                        <p>{order.phoneNumber}</p>
                                        <p>
                                            {order.address},{order.city}
                                        </p>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <div className="empty-div">
                    <p>Nobody has rented your clothes yet.</p>
                    <Link to="/">
                        <button className="btn">Back to home</button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default RentOrder;
