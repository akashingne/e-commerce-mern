import { Button } from "@material-ui/core";
import React, { useState, useEffect, useContext } from "react";
import { productContext } from "../../../Context/productProvider";

const CartPrice = () => {
  const { cart } = useContext(productContext);
  const [price, setPrice] = useState({
    productPrice: 0,
    shippingPrice: 0,
    tax: 0,
    totalPrice: 0,
  });

  const { productPrice, shippingPrice, tax, totalPrice } = price;

  useEffect(() => {
    const checkPrice = cart.map((product) => {
      return product.totalPrice;
    });

    setPrice((prevState) => ({
      ...prevState,
      productPrice: checkPrice?.reduce((sum, curr) => sum + curr, 0),
    }));

    console.log("checkPrice", productPrice);
  }, [cart, productPrice]);

  useEffect(() => {
    setPrice((prevState) => ({
      ...prevState,
      shippingPrice: productPrice > 0 ? 5 : 0,
    }));
  }, [productPrice]);

  useEffect(() => {
    const taxPrice = (productPrice + shippingPrice) * 0.18;
    setPrice((prevState) => ({ ...prevState, tax: taxPrice }));
  }, [productPrice, shippingPrice]);

  useEffect(() => {
    setPrice((prevState) => ({
      ...prevState,
      totalPrice: productPrice + shippingPrice + tax,
    }));
  }, [productPrice, shippingPrice, tax]);

  return (
    <div className="cart_total cart_inner">
      <div className="cart_total_main">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Products Price:</td>
              <td>{productPrice}$</td>
            </tr>
            <tr>
              <td>Shipping Price:</td>
              <td>{shippingPrice}$</td>
            </tr>
            <tr>
              <td>Tax:</td>
              <td>{tax}$</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td>Total Price:</td>
              <td>{totalPrice}$</td>
            </tr>
          </tfoot>
        </table>
        {totalPrice > 0 ? (
          <div className="cart_checkout text-right">
            <Button variant="contained" color="default">
              Checkout
            </Button>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default CartPrice;
