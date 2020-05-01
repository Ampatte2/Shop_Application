import React from 'react';
import {Navbar, NavbarBottom} from '../components';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {About, Account, Login} from "./index";

export default function Client() {
    return (
        <div>
            <Router>
            <Navbar view="client"></Navbar>
            <Switch>
            <Route path="/about" exact component = {About}/>
            <Route path="/account" exact component = {Account}/>
            <Route path="/login" exact component = {Login}/>
            </Switch>
            <NavbarBottom view="client"></NavbarBottom>
            </Router>
        </div>
    )
}
