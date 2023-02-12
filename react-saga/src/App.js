import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/counterActions";
import Products from "./components/products/ProductsContainer";
import Cart from "./components/products/Cart";
import Nav from "./components/products/Nav";
import {Routes,Route} from 'react-router-dom'

export default function App() {

  return (
    <>
    <Nav />
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/products" element={<Products/>} />
      <Route path="/cart" element={<Cart/>} />
    </Routes>
    </>
  );
}

// Context API
// MOBX - easier
// Redux
