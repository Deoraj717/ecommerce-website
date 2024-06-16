import React from 'react'
import Product from './Product'
import { Outlet } from 'react-router-dom'

function Products() {

  const products_data = [{name:'tillu'},{name:'sunny'}]

  return (
    <div className="products">
        <Product products={products_data}/>
        <Outlet/>
    </div>
  )
}

export default Products