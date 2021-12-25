import axios from "axios";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { setProducts } from '../redux/product/productActions'
import ProductComponent from "./ProductComponent";

const ProductList = () => {
    const products = useSelector((state) => state)
    const dispatch = useDispatch()
    const fetchProducts = async () => {
        const res = await axios.get('https://fakestoreapi.com/products')
            .catch(err => console.log(err))
        dispatch(setProducts(res.data))
    }

    useEffect(() => {
        fetchProducts();
    }, [])

    return (
        <div className="ui grid container">
           <ProductComponent />
        </div>
    )
};

export default ProductList
