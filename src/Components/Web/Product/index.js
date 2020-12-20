import { Check, ShoppingCart } from "@material-ui/icons";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { productContext } from "../../../Context/productProvider";

const Product = ({ product }) => {
  const { cart, addToCart, updateToCart } = useContext(productContext);
  const { _id, title, image, price, size } = product;

  const pOverlay = () => {
    const productOverlay = document.querySelector(`.p_${_id}`);

    productOverlay.style.cssText =
      "transform:translateY(0px);opacity:1; transition:all ease-in-out .45s";

    setTimeout(() => {
      productOverlay.style.cssText =
        "transform:translateY(-500px);opacity:0; transition:all ease-in-out .45s";
    }, 1500);
  };

  const handleAddCart = (e) => {
    e.preventDefault();
    const checkCartProduct = cart?.find((product) => product._id === _id);
    if (!checkCartProduct) {
      addToCart({ ...product, cartQty: 1, totalPrice: product.price });
    } else {
      updateToCart({
        ...product,
        cartQty: checkCartProduct.cartQty + 1,
        totalPrice: checkCartProduct.totalPrice + product.price,
      });
    }
    pOverlay();
  };

  if (cart?.length > 0) {
    console.log("cart", cart);
  }

  return (
    <>
      <div className="product--red">
        <div className="product_inner">
          <Link to={`/product/${_id}`}>
            <img src={image} width={300} alt="" />
          </Link>
          <p>{title}</p>
          <p>Size {size}</p>
          <p>Price ${price}</p>
          <button onClick={handleAddCart}>
            <ShoppingCart /> Add to basket
          </button>
        </div>
        <div className={`product_overlay p_${_id}`}>
          <h2>Added to basket</h2>
          <Check />
        </div>
      </div>
    </>
  );
};

export default Product;
