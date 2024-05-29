import React from 'react'
import Product from './Product'

function Products() {

  const products_data = [{name:'tillu'},{name:'sunny'}]

  return (
    <div className="products">
        <Product products={products_data}/>
    </div>
  )
}

export default Products