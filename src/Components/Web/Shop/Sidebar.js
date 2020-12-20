import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import React, { useContext } from "react";
import { productContext } from "../../../Context/productProvider";

const Sidebar = ({ categories, brands }) => {
  const { category, brand, setCategory, setBrand } = useContext(productContext);

  return (
    <>
      <div className="shop_sidebar text-center">
        <div className="shop_sidebar_main_title">
          <h3>Filter By</h3>
        </div>
        <div className="shop_sidebar_categories">
          <div className="shop_sidebar_title">
            <h4>Categories</h4>
          </div>
          <div className="shop_sidebar_main">
            <FormControl component="fieldset">
              <RadioGroup
                aria-label="category"
                name="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <FormControlLabel
                  value={"All"}
                  control={<Radio />}
                  label={"All"}
                />
                {categories.map((cat, i) => (
                  <FormControlLabel
                    key={i}
                    value={cat}
                    control={<Radio />}
                    label={cat}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </div>
        </div>
        <div className="shop_sidebar_brands">
          <div className="shop_sidebar_title">
            <h4>Brands</h4>
          </div>
          <div className="shop_sidebar_main">
            <FormControl component="fieldset">
              <RadioGroup
                aria-label="brand"
                name="brand"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              >
                <FormControlLabel
                  value={"All"}
                  control={<Radio />}
                  label={"All"}
                />
                {brands.map((brand, i) => (
                  <FormControlLabel
                    key={i}
                    value={brand}
                    control={<Radio />}
                    label={brand}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
