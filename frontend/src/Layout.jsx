import React from 'react'
import { Outlet } from 'react-router-dom'
import './index.css'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Products from './components/products/Products'
import SellDetail from './components/SellDetail'
import Review from './components/Review'
import bell from '/images/bell.png';
import Orders from './components/Orders'
import Login from './components/Login'
import image1 from '/images/back.jpg';
import Search from './components/Search'
function Layout() {

  const rev={
    avatar:{bell},
    username:"sunny",
    date:"26/11/2000",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, explicabo quibusdam! A dolores voluptas animi dicta ipsam laborum distinctio, harum quis. Repellat dolorem consequatur molestiae non deleniti quos ad suscipitMollitia repellendus veritatis veniam voluptatum dolore. Cupiditate repellendus voluptate obcaecati culpa quisquam tempore quia, at nulla suscipit ipsam ad aliquam quasi repudiandae perspiciatis omnis voluptatum numquam voluptates inventore officiis labore.Eligendi veritatis ab libero deleniti, officiis voluptatum earum, iure porro voluptatibus asperiores ratione aspernatur mollitia sit officia vel? Quod dolorem nisi nesciunt reprehenderit asperiores? Totam repellat doloremque cupiditate dolorum veritatis?Ratione perferendis quibusdam odit neque ea! Sunt, incidunt quam nemo aliquam perferendis perspiciatis est doloribus doloremque quae tempore blanditiis, rerum vitae accusamus omnis ea. Quas tenetur ratione animi praesentium soluta!"
  }

  const order = [
    {
      product_image:bell,
      username:"sunny",
      userid:1234,
      product_name:"shirt rx500",
      date:"12/12/12",
      time:"12:30 pm",
      quantity:2,
      amount:100
    },
    {
      product_image:bell,
      username:"sunny",
      userid:1234,
      product_name:"shirt rx500",
      date:"12/12/12",
      time:"12:30 pm",
      quantity:2,
      amount:100
    }
  ]

  return (
    <>
        <Nav/>
        <div className="temp">
      
          <Search/>

        </div>
        
        <Footer/>
    </>
  )
}

export default Layout