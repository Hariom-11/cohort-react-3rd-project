import { nanoid } from "@reduxjs/toolkit"
import {useForm} from "react-hook-form"
import { Link } from "react-router-dom"

const Register = () => {
    const { register, reset, handleSubmit } = useForm()
    const registerHandeler = (user) => {
        user.id = nanoid()
        reset()
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