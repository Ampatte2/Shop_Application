import React  from 'react'
import {Link, useLocation} from "react-router-dom"
import {useSelector} from "react-redux";


export default function Navbar() {
    const location = useLocation().pathname
    const auth = useSelector(state=>state.Auth)
    
    let navBar =    <div>
                        <div>
                            <Link to="/">Products</Link>
                            <Link to="/about">About</Link>
                            <Link to="/account">Account</Link>
                            {auth ? <button>Logout</button> : <Link to="/login">Login</Link>}
                        </div>
                        <div>
                            Offers
                        </div>
                    </div>;
    if(location.substring(0,7) === "/admin/"){
        navBar =    <div>
                    <Link to="/admin/inventory">Inventory</Link>
                    <Link to="/admin/account">Account</Link>
                    </div>
    }
    return (
        <>
            {navBar}
        </>
    )
}
