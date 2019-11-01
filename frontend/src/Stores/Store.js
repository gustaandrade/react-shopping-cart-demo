import { createStore } from "redux";

import Products from "./Reducers/Products";

const Store = createStore(Products);

export default Store;
