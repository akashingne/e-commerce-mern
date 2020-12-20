import axios from "axios";
import React, { useContext, useEffect } from "react";
import { productContext } from "../../../Context/productProvider";
import Brands from "./Brands";
import Categories from "./Categories";
import HomeProducts from "./HomeProducts";

const Home = () => {
  const {
    products,
    categories,
    brands,
    fetchProducts,
    fetchCategories,
    fetchbrands,
  } = useContext(productContext);

  useEffect(() => {
    const fetchProductsData = async () => {
      await axios
        .get("/product.json")
        .then((result) => fetchProducts(result.data));
    };
    fetchProductsData();
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
    <div className="home">
      <Categories categories={categories} />
      <Brands brands={brands} />
      <HomeProducts />
    </div>
  );
};

export default Home;
