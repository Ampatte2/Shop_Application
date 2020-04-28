import React  from 'react'
import {Link} from "react-router-dom"

export default function Navbar() {
    return (
        <div>
            <div>
                <Link to="/">Products</Link>
                <Link to="/about">About</Link>
                <Link to="/account">Account</Link>
                <Link to="/admin">Admin</Link>
                
                <Link to="/login">Login</Link>
            </div>
            <div>
                Offers
            </div>

        </div>
    )
}
