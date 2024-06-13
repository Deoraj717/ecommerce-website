import React from 'react'
import { Outlet } from 'react-router-dom'
import './index.css'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Products from './components/Products/Products'
import SellDetail from './components/SellDetail'

function Layout() {
  return (
    <>
        <Nav/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default Layout