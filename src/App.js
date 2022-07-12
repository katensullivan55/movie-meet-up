import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import About from './components/About';
import Footer from './components/Footer';
import Login from './components/Login'




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
