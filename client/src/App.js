import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Client} from "./pages"
import {Admin, AdminLogin} from './admin';


function App() {
  return (
    <>
      <Router>
      <Switch>
        <Route path="/" exact component = {Client}/>
        <Route path="/admin/main" exact component = {Admin}/>
        <Route path="/admin" exact component = {AdminLogin}/>
      </Switch>
      </Router>
    </>
  );
}

export default App;
