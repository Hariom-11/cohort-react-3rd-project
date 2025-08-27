import { createSlice } from "@reduxjs/toolkit";
import { data } from "react-router-dom";

const initialState={
    user:[]
}

const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        loadUser:(state,action)=>{
            state.user= action.payload
        }
    }
})
export default userSlice.reducer;
export const {loadUser}= userSlice.actions