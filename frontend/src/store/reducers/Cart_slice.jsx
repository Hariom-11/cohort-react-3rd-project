import { createSlice } from "@reduxjs/toolkit";
import { data } from "react-router-dom";
const initialState={
    cart:[]
}
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{
        loadCart: (state, action)=>{
            state.cart= action.payload
        }
    }
})

// export default reducer = cartSlice.reducer
export default cartSlice.reducer
export const {loadCart} = cartSlice.actions