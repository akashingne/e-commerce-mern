import React from "react";

import "../../../Assets/css/Cart.css";
import CartPrice from "./CartPrice";
import CartProduct from "./CartProduct";

const Cart = () => {
  return (
    <div className="cart">
      <div className="jumbotron">
        <div className="cart_title text-center">
          <h1>Cart</h1>
        </div>
      </div>
      <div className="cart_main">
        <CartProduct />
        <CartPrice />
      </div>
    </div>
  );
};

export default Cart;
