import React  from 'react'
import {Link} from "react-router-dom"
import {useSelector, useDispatch} from "react-redux";
import {isAuth, isAdmin} from "../store/actions"


export const Navbar =(props) => {
    const auth = useSelector(state=>state.main.Auth)
    const dispatch = useDispatch();

    const lgout =()=>{
        localStorage.removeItem("token");
        dispatch(isAuth(false));
        dispatch(isAdmin(false));
    }
    
    let navBar =    <div>
                        <div>
                            <Link to="/">Products</Link>
                            <Link to="/about">About</Link>
                            
                            {auth ? <><Link to="/account">Account</Link><button onClick={()=>lgout()}>Logout</button></> : <Link to="/login">Login</Link>}
                        </div>
                        <div>
                            Offers
                        </div>
                    </div>;
    if(props.view==="admin"){
        navBar =    <div>
                    <Link to="/admin/main/inventory">Inventory</Link>
                    <Link to="/admin/main/account">Account</Link>
                    <Link to="/admin/main/orders">Orders</Link>
                    <button onClick={()=>lgout()}>Logout</button>
                    </div>
    }
    return (
        <>
            {navBar}
        </>
    )
}
