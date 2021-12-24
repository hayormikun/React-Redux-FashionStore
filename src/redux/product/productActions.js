import axios from "axios";
import { SET_PRODUCTS } from "./productTypes";
import { SELECTED_PRODUCT } from "./productTypes";
import { REMOVE_SELECTED_PRODUCT } from "./productTypes";

export const setProducts = (products) => {

    return {
        type: SET_PRODUCTS,
        payload: products
    }
}

export const selectedProduct = (product) => {
    
    return {
        type: SELECTED_PRODUCT,
        payload: product
    }
}

export const removeSelectedProduct = (product) => {
    
    return {
        type: REMOVE_SELECTED_PRODUCT,
        payload: product
    }
}
