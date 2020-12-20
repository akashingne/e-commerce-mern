import { productAction } from "./productAction";

const productReducer = (state, { type, payload }) => {
  switch (type) {
    case productAction.FETCH_PRODUCTS:
      return {
        ...state,
        products: payload,
      };
    case productAction.FETCH_CATEGORIES:
      return {
        ...state,
        categories: payload,
      };
    case productAction.FETCH_BRANDS:
      return {
        ...state,
        brands: payload,
      };
    case productAction.ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, payload],
      };
    case productAction.UPDATE_TO_CART:
      const updatedProduct = state.cart.map((product) => {
        if (product._id === payload._id) {
          return payload;
        }
        return product;
      });
      return {
        ...state,
        cart: updatedProduct,
      };
    case productAction.REMOVE_FROM_CART:
      const updatedCart = state.cart.filter(
        (product) => product._id !== payload
      );
      return {
        ...state,
        cart: updatedCart,
      };
    case productAction.SET_CATEGORY:
      return {
        ...state,
        category: payload,
      };
    case productAction.SET_BRAND:
      return {
        ...state,
        brand: payload,
      };
    default:
      return state;
  }
};

export default productReducer;
