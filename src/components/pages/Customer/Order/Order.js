import './order.css';
import dress1 from '../../../../images/dress1.jpg';
import { useEffect, useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const Order = () => {
    const [myOrders, setMyOrders] = useState([]);

    useEffect(() => {
        const getMyOrder = async () => {
            const token = localStorage.getItem('auth-token');
            const myOrderResponse = await axios.get(
                `${process.env.REACT_APP_API_URL}/api/users/orders`,
                { headers: { Authorization: 'Bearer ' + token } }
            );
            const sortedMyOrderResponse = myOrderResponse.data.data.reverse();
            setMyOrders(sortedMyOrderResponse);
        };
        getMyOrder();
    }, []);

    const cancelOrder = async (orderId) => {
        swal({
            title: 'Are you sure?',
            text: 'Once cancelled, you will not be able to see this order!',
            icon: 'warning',
            buttons: true,
            dangerMode: true,
        }).then(async (willDelete) => {
            if (willDelete) {
                try {
                    const token = localStorage.getItem('auth-token');
                    await axios.delete(
                        `${process.env.REACT_APP_API_URL}/api/users/orders/${orderId}/cancel`,
                        { headers: { Authorization: 'Bearer ' + token } }
                    );
                    const myOrderResponse = await axios.get(
                        `${process.env.REACT_APP_API_URL}/api/users/orders`,
                        { headers: { Authorization: 'Bearer ' + token } }
                    );
                    const sortedMyOrderResponse =
                        myOrderResponse.data.data.reverse();
                    setMyOrders(sortedMyOrderResponse);
                    toast.success(`Your order has been cancelled.`);
                } catch (err) {
                    toast.error(`${err.response.data.message}`);
                }
            }
        });
    };

    return (
        <div className="order-container">
            <div class="container-fluid">
                <section>
                    <div class="row">
                        <div class="col-md-12 col-sm-12 cart-heading">
                            <div class="text-center">
                                <h4 class="text-light text-center cart-title">
                                    My Orders
                                </h4>
                            </div>
                        </div>
                    </div>
                </section>

                {myOrders.length > 0 ? (
                    <div className="table-responsive">
                        <table class="table">
                            <thead class="thead-light">
                                <tr>
                                    <th scope="col"></th>
                                    <th scope="col">Item</th>
                                    <th scope="col">Owner</th>
                                    <th scope="col">Arrival-Return Date</th>
                                    <th scope="col">Total</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {myOrders.map((order) => (
                                    <tr>
                                        <td>
                                            <Link
                                                to={`/items/${order.item.id}`}
                                            >
                                                <img
                                                    src={dress1}
                                                    class="img-fluid img-thumbnail"
                                                    alt="Dress"
                                                />
                                            </Link>
                                        </td>
                                        <td>
                                            <Link
                                                to={`/items/${order.item.id}`}
                                            >
                                                <p class="text-uppercase">
                                                    {order.item.name}
                                                </p>
                                            </Link>
                                            <p>Rs. {order.item.price}</p>
                                        </td>
                                        <td>
                                            <p>
                                                {order.item.user.firstName}{' '}
                                                {order.item.user.lastName}
                                            </p>
                                        </td>
                                        <td>
                                            <p>
                                                {order.startDate} -{' '}
                                                {order.endDate}
                                            </p>
                                        </td>
                                        <td>
                                            <p class="font-weight-bold">
                                                Rs. {order.totalPrice}
                                            </p>
                                        </td>
                                        <td>
                                            {(() => {
                                                if (
                                                    order.status === 'pending'
                                                ) {
                                                    return (
                                                        <p className="text-warning">
                                                            Pending
                                                        </p>
                                                    );
                                                }
                                                if (
                                                    order.status === 'approved'
                                                ) {
                                                    return (
                                                        <p className="text-success">
                                                            Approved
                                                        </p>
                                                    );
                                                }
                                                if (
                                                    order.status === 'refused'
                                                ) {
                                                    return (
                                                        <p className="text-danger">
                                                            Refused
                                                        </p>
                                                    );
                                                }
                                                if (
                                                    order.status === 'delivered'
                                                ) {
                                                    return (
                                                        <p className="text-success">
                                                            Delivered
                                                        </p>
                                                    );
                                                }
                                                if (
                                                    order.status === 'received'
                                                ) {
                                                    return (
                                                        <p className="text-info">
                                                            Received
                                                        </p>
                                                    );
                                                }

                                                return null;
                                            })()}
                                        </td>
                                        <td>
                                            {order.status === 'pending' ? (
                                                <button
                                                    type="button"
                                                    class="btn btn-danger"
                                                    onClick={() =>
                                                        cancelOrder(order.id)
                                                    }
                                                >
                                                    Cancel
                                                </button>
                                            ) : (
                                                <button
                                                    type="button"
                                                    title="You cannot cancel this order"
                                                    class="btn btn-secondary"
                                                    disabled
                                                >
                                                    Cancel
                                                </button>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <div className="empty-div">
                        <p>You have not ordered any clothes yet.</p>
                        <Link to="/">
                            <button className="btn">Back to home</button>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Order;
