import {createStore, combineReducers,applyMiddleware} from 'redux'
import { productListReducer ,productDetailReducer} from './reducers/productReducers';
import thunk from 'redux-thunk'
import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from './reducers/cartReducer.js';


const reducer = combineReducers({productList:productListReducer,productDetail:productDetailReducer,cart:cartReducer})
const cartItemFromStorage = localStorage.getItem('cartItems')
const initialState ={
    cart:{cartItems:cartItemFromStorage}
}
const middleware = [thunk]
const store =configureStore({reducer,initialState})


export default store