import React from 'react';
import { Link } from 'react-router-dom';
import './checkout.css';

const CheckoutComplete = () => {
    return (
        <div className="checkout-complete-container">
            <i class="fas fa-check-circle text-success" style={{fontSize:"50px"}}></i>
            <p className="mt-3">
            Your order has been placed successfully. Go to orders list page
                to see your orders.
            </p>
            <Link to="/orders">
                <button class="btn">Go to my orders</button>
            </Link>
        </div>
    );
};

export default CheckoutComplete;
