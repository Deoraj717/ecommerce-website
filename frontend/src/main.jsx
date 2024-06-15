import ReactDOM from 'react-dom';
import React from 'react';
import App from './App.jsx';
import './index.css';
import Layout from './Layout.jsx';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Dashboard from './components/Dashboard.jsx';
import Products from './components/Products/Products.jsx';
import Orders from './components/Orders.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element = {<Layout/>}>
      <Route index  element = {<Dashboard/>} />
      <Route path="Orders" element = {<Orders/>} />
      <Route path="Products" element = {<Products/>}>
        { <Route path="product:" element = {<Product-detail product = {}/>}/>/*get product detail with the help of query parameter */}
      </Route>
      <Route path="Settings" element = {<Settings/>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>,
)
