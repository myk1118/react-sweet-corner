import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import productsReducer from './products_reducer';

// The object passed to combineReducers is like a blueprint for the Redux state

const rootReducer = combineReducers({
    form: formReducer,
    products: productsReducer
});

export default rootReducer;
