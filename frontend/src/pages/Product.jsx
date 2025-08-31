import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


const Product = () => {
  const product = useSelector((state)=> state.productReducer.product)

  const rendarProduct = product.map((product)=>{
    return(
      <div key={product.id}>
        <img className='w-[20%] object-cover'  src={product.image} alt="" />
        <h1>{product.title}</h1>
        <h4>{product.description}</h4>
        <div>
          <p>{product.price}</p>
          <button>add to cart</button>
        </div>
        <Link to={`/product/${product.id}`}> more...</Link>
      </div>
    )
  })
  return ( product.length >0 ? <div>{rendarProduct}</div>:"Loading...."
  )
}

export default Product