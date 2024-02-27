import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/CartWidget.css";

function CartWidget() {
    return (
        <div className="cart-icon-container">
            <i className="fa fa-shopping-cart cart-icon"></i>
            <span className="cart-badge">3</span>
        </div>
    );
}

export default CartWidget;
