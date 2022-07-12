import React, { useState } from 'react';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import About from './components/About';
import Footer from './components/Footer';
import Login from './containers/Login'
// import Dashboard from './components/Dashboard/Dashboard';
// import Preferences from './components/Preferences/Preferences';




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

export default App;
