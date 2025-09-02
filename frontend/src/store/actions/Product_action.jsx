import axios from "../../api/AxiosConfig";
import { loadProduct } from "../reducers/Product_slice";


export const asyncLoadProduct = () => async (dispatch, getstate) => {

    try {
        const { data } = await axios.get("/product")
        dispatch(loadProduct(data))
    } catch (error) {
        console.log(error)
    }
}

export const asyncCreateProduct = (product) => async (dispatch, getstate) => {

    try {
        await axios.post("/product", product)
        dispatch(asyncLoadProduct())
    } catch (error) {
        console.log(error)
    }
}

export const asyncUpdateProduct = (id, product) => async (dispatch, getstate) => {
    try {
        await axios.patch("/product/" + id, product)
        dispatch(asyncLoadProduct())
    } catch (error) {
        console.log(error)
    }
}

export const asyncDeleteproduct =(id)=> async(dispatch, getstate)=>{
    try {
        await axios.delete("/product/"+id)
        dispatch(asyncLoadProduct())
    } catch (error) {
        console.log(error)
    }
}