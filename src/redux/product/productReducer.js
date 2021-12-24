import { SET_PRODUCTS, SELECTED_PRODUCT, REMOVE_SELECTED_PRODUCT} from "./productTypes"


const initialState = {
    products: [{
        id: 1,
        title: 'hayor',
        category: 'programming'
    }],

}

const productReducer = (state= initialState, action) => {
    switch (action.type) {
        case SET_PRODUCTS: return {
            state
        }

        // case SELECTED_PRODUCT: return {
        
        //     product: action.payload
        // }

        // case REMOVE_SELECTED_PRODUCT: return {
        
        //     errors: action.payload
        // }

        default: return state
    }
}

export default productReducer
