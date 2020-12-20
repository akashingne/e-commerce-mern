import React, { createContext, useReducer } from "react";
import productReducer from "./productReducer";
import { productAction } from "./productAction";

const initialState = {
  products: [],
  categories: [],
  brands: [],
  category: "All",
  brand: "All",
  cart: [],
};

export const productContext = createContext(initialState);

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  //Actions
  //Action for fetching all products
  const fetchProducts = (products) => {
    dispatch({
      type: productAction.FETCH_PRODUCTS,
      payload: products,
    });
  };

  //Action for fetching all categories
  const fetchCategories = (categories) => {
    dispatch({
      type: productAction.FETCH_CATEGORIES,
      payload: categories,
    });
  };

  //Action for fetching all brands
  const fetchbrands = (brands) => {
    dispatch({
      type: productAction.FETCH_BRANDS,
      payload: brands,
    });
  };

  //Action for add product to cart
  const addToCart = (product) => {
    dispatch({
      type: productAction.ADD_TO_CART,
      payload: product,
    });
  };

  //Action for add product to cart
  const updateToCart = (product) => {
    dispatch({
      type: productAction.UPDATE_TO_CART,
      payload: product,
    });
  };

  //Action for remove product to cart
  const removeFromCart = (productId) => {
    dispatch({
      type: productAction.REMOVE_FROM_CART,
      payload: productId,
    });
  };

  //Action for set category
  const setCategory = (category) => {
    dispatch({
      type: productAction.SET_CATEGORY,
      payload: category,
    });
  };

  //Action for set brand
  const setBrand = (brand) => {
    dispatch({
      type: productAction.SET_BRAND,
      payload: brand,
    });
  };

  return (
    <productContext.Provider
      value={{
        products: state.products,
        categories: state.categories,
        brands: state.brands,
        category: state.category,
        brand: state.brand,
        cart: state.cart,
        fetchProducts,
        fetchCategories,
        fetchbrands,
        addToCart,
        updateToCart,
        removeFromCart,
        setCategory,
        setBrand,
      }}
    >
      {children}
    </productContext.Provider>
  );
};

export default ProductProvider;
