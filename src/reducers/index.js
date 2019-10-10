import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import productsReducer from './products_reducer';
import cartReducer from './cart_reducer';
import ordersReducer from './orders_reducer';

// The object passed to combineReducers is like a blueprint for the Redux state

const rootReducer = combineReducers({
    form: formReducer,
    products: productsReducer,
    cart: cartReducer,
    orders: ordersReducer
});

export default rootReducer;
