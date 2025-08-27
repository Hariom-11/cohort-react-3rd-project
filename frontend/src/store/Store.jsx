import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./reducers/Product_slice";
import cartSlice from "./reducers/Cart_slice";
import userSlice from "./reducers/User_slice";


export const store = configureStore({
    reducer:{
        userReducer: userSlice ,
        productReducer: productSlice,
        cartReducer: cartSlice
    },
})