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
        <Route path="/admin/main" component = {Admin}/>
        <Route path="/admin" component = {AdminLogin}/>
        <Route path="/" component = {Client}/>
      </Switch>
      </Router>
    </>
  );
}

export default App;
