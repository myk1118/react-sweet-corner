import types from './types';
import axios from 'axios';

const BASE_URL = 'http://api.sc.lfzprototypes.com';

// ES5
// export function getAllProducts() {
//     return async function (dispatch) {
//         // Our code will go here
//     }
// }

// ES6
export const getAllProducts = () => async dispatch => {
    try {
        const response = await axios.get(BASE_URL + '/api/products');
        dispatch({
            type: types.GET_ALL_PRODUCTS,
            products: response.data.products
        })
    }
    catch (error) {
        console.log("Error getting all products: ", error);
    }
}

export const getProductDetails = (productId) => async dispatch => {
    try {
        const response = await axios.get(`${BASE_URL}/api/products/${productId}`);
        // console.log("Product Details Response: ", response);
        dispatch({
            type: types.GET_PRODUCT_DETAILS,
            product: response.data
        })
    }
    catch (error) {
        console.log("Error getting product details: ", error);
    }
}

export const clearProductDetails = () => {
    return {
        type: types.CLEAR_PRODUCT_DETAILS
    }
}