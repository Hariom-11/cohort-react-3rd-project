import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import {  asyncDeleteproduct, asyncUpdateProduct } from '../../store/actions/Product_action'

const Product_details = () => {
  const products = useSelector((state) => state.productReducer.product)
  const { id } = useParams()
  const product = products?.find((p) => p.id === id)
  const { register, handleSubmit, } = useForm({
    defaultValues:{
      image : product?.image,
      title : product?.title,
      description : product?.description,
      price : product?.price,
      category : product?.category,

    }
  })
  const dispatch = useDispatch()

  const updateProductHandler = (product) => {
    dispatch(asyncUpdateProduct(id, product))
  }

  const DeleteHandeler = ()=>{
    dispatch(asyncDeleteproduct(id))
  }

  if (!product) {
    return <p>Loading product...</p> // prevents error until data is ready
  }

  return (
    <>
      <div>
        <img className='w-[20%] object-cover ' src={product.image}  />
        <h1>{product.title}</h1>
        <h2>{product.price}</h2>
        <p>{product.description}</p>
        <h3>{product.category}</h3>
        <button>add to cart</button>
      </div>
      <div>
        <form onSubmit={handleSubmit(updateProductHandler)}>
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
          <button >update</button>
          <br />
      <button type='button' onClick={DeleteHandeler}>delete</button>
        </form>
      </div>
    </>
  )
}

export default Product_details
