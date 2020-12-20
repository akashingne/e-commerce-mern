import React, { useContext } from "react";

import "../../../Assets/css/Products.css";
import Product from "../Product";
import { productContext } from "../../../Context/productProvider";

const HomeProducts = () => {
  const { products } = useContext(productContext);

  return (
    <div className="products">
      <div className="products_title text-center">
        <h2>Products</h2>
      </div>
      <div className="row">
        {products?.length > 0
          ? products?.map((product, i) => (
              <div className="col-md-3" key={i}>
                <Product product={product} />
              </div>
            ))
          : "Products are not available....!"}
      </div>
    </div>
  );
};

export default HomeProducts;
