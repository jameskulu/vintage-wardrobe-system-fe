import './checkout.css';
import { useEffect, useState } from 'react';

const Checkout = () => {
    const items = JSON.parse(localStorage.getItem('cart')) || [];

    const [cartItems, setCartItems] = useState(items);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        cartItems.map((item) =>
            setTotalPrice((prevData) => item.totalPrice + prevData)
        );
    }, []);

    const removeItems = async (id, totalPrice) => {
        const filteredItems = items.filter((item) => item.id !== id);
        setCartItems(filteredItems);
        setTotalPrice((prevData) => prevData - totalPrice);
        localStorage.setItem('cart', JSON.stringify(filteredItems));
    };

    return (
        <div className="checkout-container">
            <heading>
                <h1 class="text-white">Checkout</h1>
            </heading>
            <h4 id="order-heading" class="mb-3">
                <b>Your Order</b>
            </h4>
            <div className="checkout-cart-table">
                <div className="table-responsive ">
                    <table class="table">
                        <thead class="thead-light">
                            <tr>
                                <th scope="col"></th>
                                <th scope="col">Item</th>
                                <th scope="col">Arrival Date</th>
                                <th scope="col">Return Date</th>
                                <th scope="col">Days</th>
                                <th scope="col">Price</th>
                                <th scope="col">Total</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map((item) => (
                                <tr>
                                    <td></td>
                                    <td>{item.name}</td>
                                    <td>{item.startDate}</td>
                                    <td>{item.endDate}</td>
                                    <td>{item.days}</td>
                                    <td>Rs.{item.price}</td>
                                    <td>Rs.{item.totalPrice}</td>
                                    <td>
                                        <button
                                            style={{
                                                border: 'none',
                                                background: 'none',
                                            }}
                                            onClick={() =>
                                                removeItems(
                                                    item.id,
                                                    item.totalPrice
                                                )
                                            }
                                        >
                                            <i class="fas fa-times"></i>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot>
                            <tr>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th>Rs.{totalPrice}</th>
                                <th></th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
            <div class="Buttom">
                <div class="shipping-info col-sm-12 col-md-6">
                    <form>
                        <div class="form-row col-sm-12 col-md-12">
                            <h3 className="mb-4">Add Shipping Information</h3>
                            <div class="form-group">
                                <input
                                    type="text"
                                    class="form-control"
                                    id="inputAddress"
                                    placeholder="Address"
                                    autocomplete="off"
                                />
                            </div>
                            <div class="form-group">
                                <input
                                    type="text"
                                    class="form-control"
                                    id="inputCity"
                                    placeholder="City"
                                    autocomplete="off"
                                />
                            </div>
                            <select class="form-control mb-3">
                                <option>Country</option>
                            </select>

                            <div class="form-group">
                                <input
                                    type="number"
                                    class="form-control"
                                    id="number"
                                    placeholder="Number"
                                    autocomplete="off"
                                ></input>
                            </div>
                            <button type="submit" class="btn btn-primary">
                                <b>SAVE</b>
                            </button>
                            <p>
                                By placing this order, you agree to the{' '}
                                <strong>
                                    <u>Terms of Service and Privacy Policy</u>
                                </strong>
                                .
                            </p>
                        </div>
                    </form>
                </div>

                <div class="billing col-sm-12 col-md-6">
                    <div class="billingpart col-sm-12 ">
                        <h2>Add Billing</h2>
                        <div class="billing-info  ">
                            <p>Sub-total</p>
                            <p>Rs.{totalPrice}</p>
                        </div>
                        <div class="billing-info ">
                            <p>Shipping</p>
                            <p>Free</p>
                        </div>
                        <hr />

                        <div class="billing-info ">
                            <p>Order Total</p>
                            <p>Rs.{totalPrice}</p>
                        </div>
                        <button type="submit" class="btn btn-primary">
                            <b>PLACE ORDER</b>
                        </button>
                        <div class="terms">
                            <i class="bi bi-lock"></i>
                            <p>Secure Payment</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
