import React from 'react'
import {Link} from "react-router-dom";

export const NavbarBottom = (props) => {
    
    let navBarBottom = <div>
                            <Link to="/">Products</Link>
                            <Link to="/about">About</Link>
                            
                        </div>
    if(props.view === "admin"){
        navBarBottom = <div>For Technical Support Please Call 623-692-6992</div>
    }
    return (
        <>
        {navBarBottom}
        </>
    )
}
