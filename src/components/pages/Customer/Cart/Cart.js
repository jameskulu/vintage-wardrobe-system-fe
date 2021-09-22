import './cart.css';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import NoImage from '../../../../images/noimage.jpg';
import UserContext from '../../../../context/UserContext';
import CartContext from '../../../../context/CartContext';

const Cart = () => {
    const { userData } = useContext(UserContext);
    const { cartData, setCartData } = useContext(CartContext);
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
        setCartData(filteredItems.length)
    };
    return (
        <div className="cart-container">
            <div class="container-fluid">
                <section>
                    <div class="row">
                        <div class="col-md-12 col-sm-12 cart-heading">
                            <div class="text-center">
                                <h4 class="text-light text-center cart-title">
                                    My Cart
                                </h4>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="table-button-cart">
                    {cartItems.length > 0 ? (
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
                                            <td>
                                                <Link to={`/items/${item.id}`}>
                                                    <img
                                                        className="img-thumbnail"
                                                        src={
                                                            item.images.length <
                                                            1
                                                                ? NoImage
                                                                : item.images[0]
                                                                      .imageURL
                                                        }
                                                        alt=""
                                                    />
                                                </Link>
                                            </td>
                                            <td>
                                                <Link to={`/items/${item.id}`}>
                                                    {item.name}
                                                </Link>
                                            </td>
                                            <td>{item.startDate}</td>
                                            <td>{item.endDate}</td>
                                            <td>{item.days}</td>
                                            <td>Rs. {item.price}</td>
                                            <td>Rs. {item.totalPrice}</td>
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
                                        <th>Rs. {totalPrice}</th>
                                        <th></th>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    ) : (
                        <div className="empty-div">
                            <p>Your cart is empty</p>
                            <Link to="/">
                                <button className="btn btn-Checkout">
                                    Back to home
                                </button>
                            </Link>
                        </div>
                    )}

                    {cartItems.length > 0 ? (
                        <div className="proceed-checkout-div">
                            <Link to={userData.user === undefined ? '/login' : '/checkout'}>
                                <button
                                    type="button"
                                    className="btn btn-Checkout"
                                >
                                    Proceed to Checkout
                                </button>
                            </Link>
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    );
};

export default Cart;
