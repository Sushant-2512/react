import React from "react";
import '../css/Layout.css';
import {Link ,Outlet} from 'react-router-dom'
import Home from "./Home";


const Layout = () =>
{
    return (
        <div  className="container">

            <div>
                
            <Link  className="btn"  to="/Animation">
                 Animation
            </Link>

            <Link className="btn" to="/Home">
                 Home
            </Link>

            <Link className="btn" to="/HOC">
                Higher order Component
            </Link>
            </div>

             <Outlet />

        </div>
    )
}


export default Layout