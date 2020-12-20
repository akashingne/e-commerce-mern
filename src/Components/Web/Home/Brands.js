import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { productContext } from "../../../Context/productProvider";

import "../../../Assets/css/Brands.css";

const Brands = ({ brands }) => {
  const { setCategory, setBrand } = useContext(productContext);
  let history = useHistory();
  const handleBrand = (brand) => {
    setBrand(brand);
    setCategory("All");
    history.push("/shop");
  };
  return (
    <div className="brands">
      <div className="container">
        <div className="brands_title text-center">
          <h2>Product Brands</h2>
        </div>
        <div className="brands_main text-center">
          <div className="row">
            {brands?.map((brand, i) => (
              <div className="col-md-2" key={i}>
                <button onClick={() => handleBrand(brand)}>
                  <div className="brands_main_inner">
                    <h5>{brand}</h5>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
