import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {About, Account, Login, Products} from "./pages"
import {AdminAccount, AdminInventory, AdminLogin} from "./admin"
import Navbar from './components/Navbar';
import NavbarBottom from "./components/NavbarBottom";

function App() {
  return (
    <div>
      
      <Router>

      <Navbar></Navbar>

      <Switch>
        <Route path="/" exact component = {Products}/>
        <Route path="/about" exact component = {About}/>
        <Route path="/account" exact component = {Account}/>
        <Route path="/login" exact component = {Login}/>
        <Route path="/admin" exact component = {AdminLogin}/>
        <Route path="/admin/account" exact component = {AdminAccount}/>
        <Route path="/admin/inventory" exact component = {AdminInventory}/>
      </Switch>

      <NavbarBottom></NavbarBottom>

      </Router>
    </div>
  );
}

export default App;
