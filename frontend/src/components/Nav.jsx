import React from "react";
import ReactDOM from 'react-dom';
import Sidebar from "./Sidebar";
import dark from '/images/dark.png';
import brand from '/images/brand.jpg';
import message from '/images/message.png';
import bell from '/images/bell.png';
import {NavLink,Outlet} from "react-router-dom";

export default function Nav(){

    const [isVis,setIsVis] = React.useState();

    const toggleSidebar = ()=>{
        setIsVis(!isVis);
    }

    return(
        <div className="nav-bar">
            <div className="sidebar-logo">
                <button className="open-sidebar" onClick={toggleSidebar}>=Open Sidebar</button>
                <Sidebar isOpen = {isVis} toggleSidebar={toggleSidebar}/>
            </div>
            <div className="brand-logo">
                <img src={brand} alt="Sunny ecommerce website"/>
            </div>
            <h1>Sunny's Store</h1>
            <div className="nav-links">
                <NavLink to="/messages" className="nav-icons"><img src={message} alt="message"></img></NavLink>
                <NavLink to="/notifications" className="nav-icons"><img src={bell} alt="message"></img></NavLink>
                <button className="nav-icons"><img src={dark} alt="dark-mode"></img></button>
                {/* #dark mode switch */}
            </div>
        </div>
    )
}
