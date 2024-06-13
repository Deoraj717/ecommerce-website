import React from 'react'
import {NavLink} from 'react-router-dom'

function Sidebar({isOpen,toggleSidebar}) {
  return (
    <div className={`sidebar-${isOpen?'open':''}`}>
        <button className='close-btn' onClick={toggleSidebar}>x</button>
        <ul>
            <li><NavLink to="dashboard">Home</NavLink></li>
            <li><NavLink to="Products">Products</NavLink></li>
            <li><NavLink to="Orders">Orders</NavLink></li>
            <li><NavLink to="Settings">Settings</NavLink></li>
            <li><NavLink to="Profile">Profile</NavLink></li>
        </ul>
    </div>
  )
}

export default Sidebar