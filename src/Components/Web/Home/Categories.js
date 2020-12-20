import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { productContext } from "../../../Context/productProvider";

import "../../../Assets/css/Categories.css";

const Categories = ({ categories }) => {
  const { setCategory, setBrand } = useContext(productContext);
  let history = useHistory();
  const handleCategory = (category) => {
    setCategory(category);
    setBrand("All");
    history.push("/shop");
  };
  return (
    <div className="category">
      <div className="container">
        <div className="category_title text-center">
          <h2>Product Categories</h2>
        </div>
        <div className="category_main text-center">
          <div className="row">
            {categories?.map((category, i) => (
              <div className="col-md-2" key={i}>
                <button onClick={() => handleCategory(category)}>
                  <div className="category_main_inner">
                    <h5>{category}</h5>
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

export default Categories;
