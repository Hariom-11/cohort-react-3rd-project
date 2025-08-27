
import { nanoid } from "@reduxjs/toolkit"
import {useForm} from "react-hook-form"
import { Link } from "react-router-dom"

const Login = () => {
    const { register, reset, handleSubmit } = useForm()
    const loginHandeler =(user)=>{
        reset()
    }

    return (
        <form onSubmit={handleSubmit(loginHandeler)} >
            <input {...register("email")} type="email" placeholder='email' />
            <input {...register("password")} type="Password" placeholder='password' />
        <button>Submit</button>
        <p>if you don't have a account <Link to='/register'>Register</Link></p>
        </form>
    )
}

export default Login