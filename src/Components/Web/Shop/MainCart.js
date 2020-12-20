import { IconButton } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import React, { useContext } from "react";
import { productContext } from "../../../Context/productProvider";

const MainCart = ({ product }) => {
  const { updateToCart, removeFromCart } = useContext(productContext);
  const { _id, title, image, cartQty, totalPrice } = product;

  const handleReduce = (e) => {
    e.preventDefault();
    updateToCart({
      ...product,
      cartQty: product.cartQty - 1,
      totalPrice: product.totalPrice - product.price,
    });
  };

  const handleIncrease = (e) => {
    e.preventDefault();
    updateToCart({
      ...product,
      cartQty: product.cartQty + 1,
      totalPrice: product.totalPrice + product.price,
    });
  };

  const handleRemove = (e) => {
    e.preventDefault();
    removeFromCart(_id);
  };

  return (
    <>
      <td>
        <img src={image} alt=""></img>
      </td>
      <td>
        <div className="cart_content cart_qty_btn">
          <button
            className={cartQty === 1 ? "btnDisable" : ""}
            // className={`${disableReduce}`}
            onClick={handleReduce}
          >
            -
          </button>
          <label>{cartQty}</label>
          <button onClick={handleIncrease}>+</button>
        </div>
      </td>
      <td>
        <div className="cart_content">{title}</div>
      </td>
      <td>
        <div className="cart_content">{totalPrice}$</div>
      </td>
      <td>
        <div className="cart_content cart_content_rmv_btn">
          <IconButton onClick={handleRemove}>
            <Close />
          </IconButton>
        </div>
      </td>
    </>
  );
};

export default MainCart;
