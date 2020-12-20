import React, { useContext, useEffect, useState } from "react";
import { productContext } from "../../../Context/productProvider";
import Product from "../Product";

const ShopProducts = () => {
  const { products, category, brand } = useContext(productContext);
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    const filterdProduct = products?.filter((product) => {
      if (category === "All" && brand === "All") {
        return products;
      } else if (category !== "All" && brand === "All") {
        return product.category === category;
      } else if (category === "All" && brand !== "All") {
        return product.brand === brand;
      } else if (category !== "All" && brand !== "All") {
        return product.category === category && product.brand === brand;
      }
      return product;
    });

    setProductsData(filterdProduct);
  }, [brand, category, products]);

  return (
    <div className="products products_shop">
      <div className="products_title">
        <h2>Products</h2>
      </div>
      <div className="row">
        {productsData?.length > 0
          ? productsData?.map((product, i) => (
              <div className="col-md-4" key={i}>
                <Product product={product} />
              </div>
            ))
          : "Products are not available....!"}
      </div>
    </div>
  );
};

export default ShopProducts;
