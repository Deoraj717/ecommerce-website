import ReactDOM from 'react-dom';
import React from 'react';
import App from './App.jsx';
import './index.css';
import Layout from './Layout.jsx';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Dashboard from './components/Dashboard.jsx';
import Products from './components/products/Products.jsx';
import Orders from './components/Orders.jsx';
import Settings from './components/Settings.jsx';
import Product from './components/products/Product.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Dashboard />} />
      <Route path="Orders" element={<Orders />} />
      <Route path="Products" element={<Products />}> 
         <Route path=":productid" element={<Product />} />
      </Route>
      <Route path="Settings" element={<Settings />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>,
);

