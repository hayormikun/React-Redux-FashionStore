import { combineReducers } from "redux";
import productReducer from "./product/productReducer";

const rootReducer = combineReducers({
    allProducts: productReducer
})

export default rootReducer