// redux/store.js
//import { createStore, combineReducers, applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counterReducer";
import handleCart from "./cartReducer";
//import productsReducer from "./productsReducer";
import productsReducer from "./productsSlice";
import { fetchAllProductsSaga } from "./productsSaga";
import createSagaMiddleware from "@redux-saga/core";
import { all } from "redux-saga/effects";

// combine sync reducers
// const rootReducer = combineReducers({ counterReducer, productsReducer });

const saga = createSagaMiddleware();

//const store = createStore(rootReducer, applyMiddleware(saga));
const store = configureStore({
  reducer: { handleCart, counterReducer,productsReducer },
  middleware: () => [saga]
});

// combine async reducers
function* rootSaga() {
  yield all([fetchAllProductsSaga()]);
}

// Run root saga
saga.run(rootSaga);

export default store;
