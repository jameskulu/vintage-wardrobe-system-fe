import './checkout.css';
import { useEffect, useState } from 'react';
import dress1 from '../../../../images/dress1.jpg';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';

const Checkout = () => {
    const items = JSON.parse(localStorage.getItem('cart')) || [];

    const history = useHistory();
    const [phone, setPhone] = useState();
    const [address, setAddress] = useState();
    const [city, setCity] = useState();
    const [country, setCountry] = useState();
    const [totalPrice, setTotalPrice] = useState(0);

    const [cartItems] = useState(items);

    useEffect(() => {
        cartItems.map((item) =>
            setTotalPrice((prevData) => item.totalPrice + prevData)
        );
    }, []);

    const orderItems = async () => {
        const items = [];
        cartItems.forEach((item) => {
            items.push({
                startDate: item.startDate,
                endDate: item.endDate,
                phoneNumber: phone,
                address,
                city,
                country,
                totalPrice: item.totalPrice,
                itemId: item.id,
            });
        });

        try {
            const token = localStorage.getItem('auth-token');
            await axios.post(
                `${process.env.REACT_APP_API_URL}/api/orders/new`,
                { items },
                { headers: { Authorization: 'Bearer ' + token } }
            );
            toast.success('Order successfully placed', {
                position: toast.POSITION.BOTTOM_RIGHT,
            });
            localStorage.setItem('cart', JSON.stringify([]));
            history.push('/checkout/complete');
        } catch (err) {
            toast.error(err.response.data.message, {
                position: toast.POSITION.BOTTOM_RIGHT,
            });
        }
    };

    return (
        <div className="checkout-container">
            <heading>
                <h3 className="text-white">Checkout</h3>
            </heading>
            <h4 id="order-heading" className="mb-3">
                <b>Your Order</b>
            </h4>
            <div className="checkout-cart-table">
                <div className="table-responsive ">
                    <table className="table">
                        <thead className="thead-light">
                            <tr>
                                <th scope="col"></th>
                                <th scope="col">Item</th>
                                <th scope="col">Arrival Date</th>
                                <th scope="col">Return Date</th>
                                <th scope="col">Days</th>
                                <th scope="col">Price</th>
                                <th scope="col">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map((item) => (
                                <tr>
                                    <td>
                                        <img
                                            className="img-thumbnail"
                                            src={dress1}
                                            alt=""
                                        />
                                    </td>
                                    <td>{item.name}</td>
                                    <td>{item.startDate}</td>
                                    <td>{item.endDate}</td>
                                    <td>{item.days}</td>
                                    <td>Rs. {item.price}</td>
                                    <td>Rs. {item.totalPrice}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="Buttom">
                <div className="shipping-info col-sm-12 col-md-6">
                    <form>
                        <div className="form-row col-sm-12 col-md-12">
                            <h3 className="mb-4">Add Shipping Information</h3>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="inputAddress"
                                    placeholder="Address"
                                    autocomplete="off"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="inputCity"
                                    placeholder="City"
                                    autocomplete="off"
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                />
                            </div>
                            <select
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                                className="form-control mb-3"
                            >
                                <option selected="true" disabled="disabled">
                                    Country
                                </option>
                                <option value="Nepal">Nepal</option>
                            </select>

                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="number"
                                    placeholder="Phone Number"
                                    autocomplete="off"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                ></input>
                            </div>
                       
                            <p className="mt-3">
                                By placing this order, you agree to the{' '}
                                <strong>
                                    <u>Terms of Service and Privacy Policy</u>
                                </strong>
                                .
                            </p>
                        </div>
                    </form>
                </div>

                <div className="billing col-sm-12 col-md-6">
                    <div className="billingpart col-sm-12 ">
                        <h2>Add Billing</h2>
                        <div className="billing-info  ">
                            <p>Sub-total</p>
                            <p>Rs. {totalPrice}</p>
                        </div>
                        <div className="billing-info ">
                            <p>Shipping</p>
                            <p>Free</p>
                        </div>
                        <hr />

                        <div className="billing-info ">
                            <p>Order Total</p>
                            <p>Rs. {totalPrice}</p>
                        </div>
                        <button
                            onClick={orderItems}
                            type="submit"
                            className="btn btn-primary"
                        >
                            <b>PLACE ORDER</b>
                        </button>
                        <div className="terms">
                            <i className="bi bi-lock"></i>
                            <p>Secure Payment</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
