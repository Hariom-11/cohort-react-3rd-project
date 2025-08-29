 import axios from "../../api/AxiosConfig"
import { loadUser } from "../reducers/User_slice"

 export const asynccurrentuser=  (ser)=>async(dispatch, state)=>{

    try {
        const user = JSON.parse(localStorage.getItem("user"))
        if(user) dispatch(loadUser(user))
            else console.log("user not found")
    } catch (error) {
        console.log(error)
    }
}

export const asynclogoutuser=  (user)=>async(dispatch, state)=>{

    try {
         localStorage.removeItem("user")
    } catch (error) {
        console.log(error)
    }
}

export const asyncloginuser=  (user)=>async(dispatch, state)=>{

    try {
         const {data} = await axios.get(`/user?email=${user.email}&password=${user.password}`)
        console.log(data[0])
        localStorage.setItem("user", JSON.stringify(data[0]))
    } catch (error) {
        console.log(error)
    }
}

export const asyncregisteruser= (user)=> async (dispatch, state)=>{

    try {
        const res = await axios.post("/user", user)
        console.log(res)
    } catch (error) {
        console.log(error)
    }
}