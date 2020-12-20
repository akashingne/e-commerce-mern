import axios from "axios";
import React, { useContext, useEffect } from "react";

import "../../../Assets/css/Shop.css";
import { productContext } from "../../../Context/productProvider";
import ShopProducts from "./ShopProducts";
import Sidebar from "./Sidebar";

const Shop = () => {
  const {
    products,
    categories,
    brands,
    fetchProducts,
    fetchCategories,
    fetchbrands,
  } = useContext(productContext);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("/product.json")
        .then((result) => fetchProducts(result.data));
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchCategoriesData = async () => {
      const categoryData = await products?.map((product) => product.category);
      fetchCategories([...new Set(categoryData)]);
    };
    fetchCategoriesData();
  }, [products]);

  useEffect(() => {
    const fetchBrandsData = async () => {
      const brandData = await products?.map((product) => product.brand);
      fetchbrands([...new Set(brandData)]);
    };
    fetchBrandsData();
  }, [products]);

  return (
    <div className="shop">
      <Sidebar categories={categories} brands={brands} />
      <div className="shop_main">
        <ShopProducts />
      </div>
    </div>
  );
};

export default Shop;
