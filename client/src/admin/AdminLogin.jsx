import React, {useState} from 'react'
import {useSelector, useDispatch} from "react-redux";
import {adminLogin} from "../store/actions";
import { Redirect } from 'react-router-dom';

export default function AdminLogin() {
    
    const [user, setUser] = useState({email:"", password: ""})
    const errorMessage = useSelector(state=> state.Error);
    const adminAuth = useSelector(state=> state.admin.AdminAuth)
    const dispatch = useDispatch();

    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(adminLogin(user));
    }
    
    const handleChange = (e) =>{
        setUser({...user, [e.target.name]: e.target.value})
    }

    return (
        <div>
            {adminAuth && <Redirect to="/admin/main"/>}
            <form onSubmit={handleSubmit}>
            <input placeholder="Email" name="email" onChange={(e)=>handleChange(e)} value={user.email}></input>
            <input placeholder="Password" name="password" onChange={(e)=>handleChange(e)} value={user.password}></input>
            <button>Login</button>
            </form>

            {errorMessage && <div>{errorMessage}</div>}

            

            
        </div>
    )
}
