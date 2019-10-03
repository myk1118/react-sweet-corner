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

export const addItemToCart = (productId, quantity) => async (dispatch) => {
    try {
        // console.log(`From Action Creator, quantity: ${quantity} Product ID: ${productId}`);
        const cartToken = localStorage.getItem('sc-cart-token');
        const axiosConfig = {
            headers: {
                'X-Cart-Token': cartToken
            }
        }
        const response = await axios.post(
            `${BASE_URL}/api/cart/items/${productId}`,
            { quantity: quantity },
            axiosConfig
        );
        console.log('From Action Creator - Response: ', response);
        localStorage.setItem('sc-cart-token', response.data.cartToken);

        // We are saving the cartToken into localStorage so that we can send it in 
        // future requests. The cartToken is how the server knows which cart belongs to 
        // who and by us saving it into localStorage even if we leave the website and 
        // comeback later our shopping cart will still be there as we left it.

        dispatch({
            type: types.ADD_ITEM_TO_CART,
            cartTotal: response.data.total
        })
    } catch (error) {
        console.log('Add Item to Cart Error: ', error.message);
    }
}

export const getActiveCart = () => async dispatch => {
    try {
        // console.log("Get active cart action creator");
        const cartToken = localStorage.getItem('sc-cart-token');
        const axiosConfig = {
            headers: {
                'X-Cart-Token': cartToken
            }
        }
        const response = await axios.get(
            `${BASE_URL}/api/cart`,
            axiosConfig
        )
        // console.log('Get active cart server response:', response);
        dispatch({
            type: types.GET_ACTIVE_CART,
            cart: response.data
        })
    } catch (error) {
        console.log("Get active cart Error: ", error.message);
    }
}