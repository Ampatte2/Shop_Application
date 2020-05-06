import React, {useEffect} from 'react';
import {Navbar, NavbarBottom} from '../components';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {About, Account, Login} from "./index";
import {useDispatch} from "react-redux";
import { getData } from '../store/actions';
import Products from './Products';


export const Client = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getData({index1: 1, index2: 10, category:"men"}))
    }, []);
 
    return (
        <div>
            
            <Navbar view="client"></Navbar>
            <Switch>
            <Route path="/" exact component={Products}></Route>
            <Route path="/about" exact component = {About}/>
            <Route path="/account" exact component = {Account}/>
            <Route path="/login" exact component = {Login}/>
            </Switch>
            <NavbarBottom view="client"></NavbarBottom>
            
        </div>
    )
}
