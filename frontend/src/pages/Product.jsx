import React from 'react'
import { useSelector } from 'react-redux'

const Product = () => {
  const product = useSelector((state)=> state.productReducer.product)
  console.log(product)

  const rendarProduct = product.map((product)=>{
    return(
      <div key={product.id}>
        <img src={product.image} alt="" />
        <h1>{product.title}</h1>
        <h4>{product.description}</h4>
        <div>
          <p>{product.price}</p>
          <button>add to cart</button>
        </div>
      </div>
    )
  })
  return ( product.length >0 ? <div>{rendarProduct}</div>:"Loading...."
  )
}

export default Product