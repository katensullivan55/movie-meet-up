import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import About from './components/About';
import Footer from './components/Footer';
import Login from './components/Login/Login';
import Dashboard from '../Dashboard/Dashboard';
import Preferences from '../Preferences/Preferences';




function App() {
  return (
    <div className="App">
      
      <Header />
      <Login />
      <Sidebar />
      <About />
      <Footer />
    </div>
  );
}

function Wrapper() {
  return (
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
      <Switch>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/preferences">
          <Preferences />
        </Route>
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
