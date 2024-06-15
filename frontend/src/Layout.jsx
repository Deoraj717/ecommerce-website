import React from 'react'
import { Outlet } from 'react-router-dom'
import './index.css'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Products from './components/Products/Products'
import SellDetail from './components/SellDetail'
import Review from './components/Review'
import bell from '/images/bell.png';

function Layout() {

  const rev={
    avatar:{bell},
    username:"sunny",
    date:"26/11/2000",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, explicabo quibusdam! A dolores voluptas animi dicta ipsam laborum distinctio, harum quis. Repellat dolorem consequatur molestiae non deleniti quos ad suscipitMollitia repellendus veritatis veniam voluptatum dolore. Cupiditate repellendus voluptate obcaecati culpa quisquam tempore quia, at nulla suscipit ipsam ad aliquam quasi repudiandae perspiciatis omnis voluptatum numquam voluptates inventore officiis labore.Eligendi veritatis ab libero deleniti, officiis voluptatum earum, iure porro voluptatibus asperiores ratione aspernatur mollitia sit officia vel? Quod dolorem nisi nesciunt reprehenderit asperiores? Totam repellat doloremque cupiditate dolorum veritatis?Ratione perferendis quibusdam odit neque ea! Sunt, incidunt quam nemo aliquam perferendis perspiciatis est doloribus doloremque quae tempore blanditiis, rerum vitae accusamus omnis ea. Quas tenetur ratione animi praesentium soluta!"
  }

  return (
    <>
        <Nav/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default Layout