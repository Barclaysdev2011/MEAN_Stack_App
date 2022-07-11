import {createStore, combineReducers,applyMiddleware} from 'redux'
import { productListReducer ,productDetailReducer} from './reducers/productReducers';
import thunk from 'redux-thunk'
import { configureStore } from "@reduxjs/toolkit";


const reducer = combineReducers({productList:productListReducer,productDetail:productDetailReducer})
const initialState ={}
const middleware = [thunk]
const store =configureStore({reducer})


export default store