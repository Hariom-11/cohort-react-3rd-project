import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const Product_details = () => {
  const products = useSelector((state) => state.productReducer.product)
  const { id } = useParams()


  const pro = products?.find((p) => p.id === id) 

  if (!pro) {
    return <p>Loading product...</p> // prevents error until data is ready
  }

  return (
    <div>
      <img src={pro.image} alt={pro.title} />
      <h1>{pro.title}</h1>
      <h2>{pro.price}</h2>
      <p>{pro.description}</p>
      <h3>{pro.category}</h3>
      <div></div>
    </div>
  )
}

export default Product_details
