import './checkout.css';
import dress1 from '../../../../images/dress1.jpg';

const Checkout = () => {
    return (
        <div className="checkout-container">
            <heading>
                <h1 class="text-white">Checkout</h1>
            </heading>
            <h4 id="order-heading" class="mb-3">
                <b>Your Order</b>
            </h4>
            <table class="table">
                <thead>
                    <tr>
                        <th id="topic" scope="col">
                            Renting
                        </th>
                    </tr>
                </thead>
                <thead class="thead-light">
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">item</th>
                        <th scope="col">Arrival - Return Date</th>
                        <th scope="col">Total</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td id="pic">
                            <img
                                src={dress1}
                                class="img-fluid img-thumbnail"
                                alt="Sheep"
                            />
                        </td>
                        <td>
                            <p class="text-uppercase">Hutch</p>
                            <p>Printed Leona Dress</p>
                            <p>$355</p>
                        </td>
                        <td>
                            <p> Sat, Jun 19 - Tue, Jun 22 (4 days)</p>
                        </td>
                        <td>
                            <p>$64.00</p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="Buttom col-md-12">
                <div class="shipping-info col-sm-12 col-md-6">
                    <form>
                        <div class="form-row col-sm-12 col-md-12">
                            <h3>Add Shipping Information</h3>
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
                            <p>$64</p>
                        </div>
                        <div class="billing-info ">
                            <p>Shipping</p>
                            <p>Free</p>
                        </div>
                        <hr />

                        <div class="billing-info ">
                            <p>Order Total</p>
                            <p>$79.83</p>
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
