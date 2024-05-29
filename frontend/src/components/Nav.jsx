import React from "react";
import ReactDOM from 'react-dom';
import {NavLink,Outlet} from "react-router-dom";

export default function Nav(){
    return(
        <div className="nav-bar">
            <div className="brand-logo">
                <img src=""/>
            </div>
            <div className="nav-links">
                <NavLink to="/Overview">Overview</NavLink>
                <NavLink to="/Products">Products</NavLink>
                <NavLink to="/Orders">Orders</NavLink>
                <NavLink to="/Settings">Settings</NavLink>
            </div>
        </div>
    )
}
