import React, { useState } from 'react';
//import { BrowserRouter, Route, Switch } from 'react-router-dom';
//import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
//import Sidebar from './components/Sidebar';
import About from './components/About';
import ContactForm from './components/Contact';
import Footer from './components/Footer';
import Login from './containers/Login'
//import Dashboard from './components/Dashboard/Dashboard';
//import Preferences from './components/Preferences/Preferences';

function App() {
  const [AC] = useState([
    {
      name: 'commercial',
      description: '',
    },
    { name: 'portraits', description: '' },
    { name: 'food', description: '' },
    { name: 'landscape', description: '' },
  ]);

  const [currentCategory, setCurrentCategory] = useState(AC[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Header
        AC={AC}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Header>
      <main>
        {!contactSelected ? (
          <>
            <About currentCategory={currentCategory}></About>
            <Events></Events>
            <Footer></Footer>
          </>
        ) : (
          <ContactForm></ContactForm>
        )
        }
      </main>
    </div>
  );
}

export default App;
/*
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Sidebar />
      <div className="container">
      
      <Routes>
        <Route
        path="/"
        element={<About />}
        />

      
       
      </Routes>
    </div>
      <Header />
      <Login />
      <Sidebar />
      <About />
      <Footer />
      </Router>
    </div>
    
  );
}
/*        <Route
        path="/login"
        element={<Login />}
        /> 
                <Route 
        path="/signup" 
        element={<Signup />}
        />
*/
