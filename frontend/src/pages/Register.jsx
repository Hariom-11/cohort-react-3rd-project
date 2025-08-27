import { nanoid } from "@reduxjs/toolkit"
import {useForm} from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import { asyncregisteruser } from "../store/actions/User_action"
import {useDispatch} from "react-redux"
const Register = () => {
    const navigate = useNavigate()
    const { register, reset, handleSubmit } = useForm()
    const dispatch = useDispatch()
    const registerHandeler = (user) => {
        user.id = nanoid()
        user.isadmin= false
        dispatch(asyncregisteruser(user))
        navigate("/login")
    }
    return (
        <form onSubmit={handleSubmit(registerHandeler)} >
            <input {...register("username")} type="text" placeholder='username' />
            <input {...register("email")} type="email" placeholder='email' />
            <input {...register("password")} type="Password" placeholder='password' />
            <button>Submit</button>
            <p>if you already have a account <Link to='/login'>Login</Link></p>
        </form>
    )
}

export default Register