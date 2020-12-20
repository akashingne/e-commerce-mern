import axios from "axios";
import { Button } from "@material-ui/core";
import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { productContext } from "../../../Context/productProvider";

import "../../../Assets/css/SingleProduct.css";

const SingleProduct = () => {
  const { products, cart, fetchProducts, addToCart, updateToCart } = useContext(
    productContext
  );
  const { id } = useParams();
  const [product, setProduct] = useState({
    _id: 0,
    title: "",
    discription: "",
    image: "",
    category: "",
    brand: "",
    price: 0,
    size: 0,
    quantity: 0,
    cartQty: 0,
    totalPrice: 0,
  });

  useEffect(() => {
    if (products?.length === 0) {
      axios.get("/product.json").then((result) => fetchProducts(result.data));
    }
  }, [products]);

  useEffect(() => {
    const fetchProductData = () => {
      const productData = products.find(
        (product) => product._id === Number(id)
      );
      setProduct({ ...productData, cartQty: 1, totalPrice: productData.price });
    };
    fetchProductData();
  }, [products, id]);

  const handleReduce = (e) => {
    e.preventDefault();
    setProduct({
      ...product,
      cartQty: product.cartQty - 1,
      totalPrice: product.totalPrice - product.price,
    });
  };

  const handleIncrease = (e) => {
    e.preventDefault();
    setProduct({
      ...product,
      cartQty: product.cartQty + 1,
      totalPrice: product.totalPrice + product.price,
    });
  };

  const handleAddCart = (e) => {
    e.preventDefault();
    const checkCartProduct = cart?.find(
      (product) => product._id === Number(id)
    );
    if (!checkCartProduct) {
      addToCart(product);
    } else {
      updateToCart({
        ...product,
        cartQty: checkCartProduct.cartQty + product.cartQty,
        totalPrice: checkCartProduct.totalPrice + product.totalPrice,
      });
    }
  };

  useEffect(() => {
    console.log("product", product);
  }, [product]);

  return (
    <div className="singleProduct">
      <div className="jumbotron text-center">
        <h1>{product?.title}</h1>
      </div>
      <div className="singleProduct_wrapper">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="singleProduct_image">
                <img src={product?.image} alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="singleProduct_content">
                <h3>{product?.title}</h3>
                <h3>${product?.price}</h3>
                <p>
                  <span>Category: </span>
                  {product?.category}
                </p>
                <p>
                  <span>Brand: </span>
                  {product?.brand}
                </p>
                <div className="singleProduct_discription">
                  <p>{product?.discription}</p>
                </div>
                <div className="singleProduct_quantity">
                  <button
                    className={product?.cartQty === 1 ? "btnDisable" : ""}
                    onClick={handleReduce}
                  >
                    -
                  </button>
                  <label>{product?.cartQty}</label>
                  <button onClick={handleIncrease}>+</button>
                </div>
                <div className="singleProduct_addToCart">
                  <Button
                    variant="contained"
                    color="default"
                    onClick={handleAddCart}
                  >
                    Add To Cart
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
