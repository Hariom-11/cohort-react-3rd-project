import { createSlice } from "@reduxjs/toolkit";
import { data } from "react-router-dom";

const initialState={
    product:[]
}

const productSlice= createSlice({
    name:"product",
    initialState,
    reducers:{
        loadProduct:(state,action)=>{
            state.product=action.payload
        }
    }
})
export default productSlice.reducer;
export const {loadProduct}= productSlice.actions;