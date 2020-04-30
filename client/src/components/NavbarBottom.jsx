import React from 'react'
import {Link, useLocation} from "react-router-dom";

export default function NavbarBottom() {
    const location = useLocation().pathname
    let navBarBottom = <div>
                            <Link to="/">Products</Link>
                            <Link to="/about">About</Link>
                            <Link to="/account">Account</Link>
                            <Link to="/login">Login</Link>
                        </div>
    if(location.substring(0,7) === "/admin/"){
        navBarBottom = <div>For Technical Support Please Call 623-692-6992</div>
    }
    return (
        <>
        {navBarBottom}
        </>
    )
}
