export const fetchAllProducts = () => {
    return {
      type: "FETCH_ALL_PRODUCTS"
    };
  };
  
  export const setProducts = (products = null) => {
    if (products) {
      return {
        type: "SET_PRODUCTS",
        payload: products
      };
    }
  };
  