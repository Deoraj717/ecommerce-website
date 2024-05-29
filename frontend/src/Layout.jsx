import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from './components/Nav'
import Products from './components/Products/Products'
import SellDetail from './components/SellDetail'

function Layout() {
  return (
    <>
        <Products/>
        <Outlet/>
    </>
  )
}

export default Layout