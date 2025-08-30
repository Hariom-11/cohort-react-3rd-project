import { nanoid } from '@reduxjs/toolkit'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { asyncCreateProduct } from '../../store/actions/Product_action'
import { useDispatch } from 'react-redux'

const Create_product = () => {
    const { register, handleSubmit, } = useForm()
    const dispatch=useDispatch()
    const navigate=useNavigate()

    const createProductHandler = (product) => {
        product.id = nanoid()
        dispatch(asyncCreateProduct(product))
        navigate("/product")
    }

    return (
        <form onSubmit={handleSubmit(createProductHandler)}>
            <input
                {...register("image")}
                type="url" placeholder='image' />
            <input
                {...register("title")}
                type="text" placeholder='title' />
            <input
                {...register("price")}
                type="number" placeholder='price' />
            <textarea {...register('description')}
                placeholder='description'></textarea>
            <input
                {...register("category")}
                type="text" placeholder='category' />
            <button type="submit">create</button>
        </form>
    )
}

export default Create_product