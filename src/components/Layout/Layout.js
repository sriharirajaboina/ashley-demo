import React from  "react"

import {Outlet,Link} from "react-router-dom"

const Layout=()=>{
    return (
        <>
        <div>
            <Link to="/">Homepage</Link>
            <Link to="/service">Service</Link>
        </div>

        <hr/>
        <Outlet/>
        </>
    )
}

export default Layout
