import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import About from './components/About';
import Footer from './components/Footer';




function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <About />
      <Footer />
    </div>
  );
}

export default App;
