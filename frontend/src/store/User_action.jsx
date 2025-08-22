import axios from "../api/AxiosConfig";


export const asyncgetuser = async()=>{

    try {
        const res= await axios.get('/user')
        console.log(res)
    } catch (error) {
        console.log(error)
    }
}