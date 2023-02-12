import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//import { fetchAllProducts } from "../../redux/productsAction";
import { fetchAllProducts } from "../../redux/productsSlice";

import ProductsComponent from "./ProductsComponent";

const ProductsContainer = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productsReducer.products);
  const status = useSelector((state) => state.productsReducer.status);

  console.log("Products: ", products);
  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  return <ProductsComponent products={products} status={status} />;
};

export default ProductsContainer;
