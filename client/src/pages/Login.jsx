import React, {useState} from 'react'
import {useSelector, useDispatch} from "react-redux";
import {userLogin, userRegister, isError} from "../store/actions"
import { Redirect } from 'react-router-dom';

export default function Login() {

    const [pass, setPass] = useState(false);
    const [user, setUser] = useState({email:"", password: "", repeat:""})
    const [signUp, setSignUp] = useState(false);
    const errorMessage = useSelector(state=> state.main.Error);
    const auth = useSelector(state=>state.main.Auth);
    const dispatch = useDispatch();
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(userLogin(user));
    }

    const handleRegister = (e) =>{

        e.preventDefault();

        if(user.password.length < 6){
            setPass("Password Needs To Be Longer Than 6 Characters")
        }else if(user.password !== user.repeat){
            setPass("Passwords Do Not Match")
        }else{
            setPass(false)
            dispatch(userRegister(user));
        }
        
    }
    
    const handleChange = (e) =>{
        setUser({...user, [e.target.name]: e.target.value})
    }

    return (
        <div>
            {auth && <Redirect to="/account"/>}
            <form onSubmit={signUp ? handleRegister : handleSubmit}>
            <input placeholder="Email" name="email" onChange={(e)=>handleChange(e)} value={user.email}></input>
            <input placeholder="Password" name="password" onChange={(e)=>handleChange(e)} value={user.password}></input>
            {signUp && <input placeholder="Repeat Password" name="repeat" onChange={(e)=>handleChange(e)} value={user.repeat}></input>}
            <button>{signUp ? "Register" : "Login"}</button>
            </form>

            {pass && <div>{pass}</div>}
            {errorMessage && <div>{errorMessage}</div>}

            <button onClick={()=>{setSignUp(!signUp); dispatch(isError(false))}}>Register</button>

            
        </div>
    )
}
