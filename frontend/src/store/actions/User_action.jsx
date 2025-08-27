 import axios from "../../api/AxiosConfig"
export const asyncregisteruser= (user)=> async (dispatch, state)=>{

    try {
        const res = await axios.post("/user", user)
        console.log(res)
    } catch (error) {
        console.log(error)
    }
}