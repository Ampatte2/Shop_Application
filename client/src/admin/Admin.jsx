import React from 'react'
import {Navbar, NavbarBottom} from '../components';
import { BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import {AdminAccount, AdminInventory, AdminOrders} from "./index";
import {useSelector} from "react-redux";

export default function Admin(){

    const AdminAuth = useSelector(state=>state.admin.AdminAuth);
    
    return (
        <div>
            {!AdminAuth && <Redirect to="/admin"/>}
            <Router>
            <Navbar view="admin"></Navbar>
            <Switch>
            <Route path="/admin/main/account" exact component = {AdminAccount}/>
            <Route path="/admin//main/inventory" exact component = {AdminInventory}/>
            <Route path="/admin/main/orders" exact component = {AdminOrders}/>
            </Switch>
            <NavbarBottom view="admin"></NavbarBottom>
            </Router>
        </div>
    )
}
