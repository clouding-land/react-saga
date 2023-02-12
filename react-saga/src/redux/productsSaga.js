import { takeEvery, call, put } from "redux-saga/effects";
import fakeStoreServices from "../fakeStoreServices";
//import { setProducts } from "./productsAction";
import { setProducts } from "./productsSlice";

function* fetchAllProductsSagaFunction() {
  //console.log("With in saga");
  try {
    const products = yield call(fakeStoreServices.getAllProducts);
    //console.log(products)
    yield put(setProducts(products));
  } catch (e) {}
}

export function* fetchAllProductsSaga() {
  yield takeEvery("products/fetchAllProducts", fetchAllProductsSagaFunction);
}
