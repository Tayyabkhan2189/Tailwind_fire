import React from 'react'
import { useLocation } from 'react-router-dom';

const Productdetails = () => {
  const { state } = useLocation();
  const product = state?.product;
  return (
    <>
    <div className="container mx-auto px-5 py-10 ">
      {product ? (
        <div className="max-w-2xl mx-auto shadow-2xl px-10 py-10">
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <img src={product.thumbnail} alt={product.title} className="w-30 text-center" />
          <p className="mt-5 text-lg">{product.description}</p>
          <p className="mt-5 text-xl font-semibold">Price: ${product.price}</p>
        </div>
      ) : (
        <p>Product not found.</p>
      )}
    </div>
      
    </>
  )
}

export default Productdetails
