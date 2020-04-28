import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import {About, Account, Admin, Login, Products} from "./pages"
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      
      <Router>

      <Navbar></Navbar>

      <Switch>
        <Route path="/" exact component = {Products}/>
        <Route path="/about" exact component = {About}/>
        <Route path="/account" exact component = {Account}/>
        <Route path="/admin" exact component = {Admin}/>
        <Route path="/login" exact component = {Login}/>
      </Switch>

      <div>
        <Link to="/">Products</Link>
        <Link to="/about">About</Link>
        <Link to="/account">Account</Link>
        <Link to="/admin">Admin</Link>
        <Link to="/login">Login</Link>
      </div>

      </Router>
    </div>
  );
}

export default App;
