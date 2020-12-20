import React, { useContext } from "react";
import { productContext } from "../../../Context/productProvider";
import MainCart from "./MainCart";

const CartProduct = () => {
  const { cart } = useContext(productContext);

  return (
    <div className="cart_products cart_inner">
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th>Qty</th>
            <th>Product</th>
            <th>Price Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cart?.length > 0 ? (
            cart?.map((data, i) => (
              <tr key={i}>
                <MainCart product={data} />
              </tr>
            ))
          ) : (
            <tr>
              <td>Cart is empty....!</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CartProduct;
