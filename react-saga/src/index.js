import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import store from "./redux/store";
import { Provider } from "react-redux";
import {BrowserRouter} from 'react-router-dom'
import App from "./App";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
  <BrowserRouter>
  <Provider store={store} >
  <App />
  </Provider>
  </BrowserRouter>
  </StrictMode>
);
