import React from 'react';

// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import About from './components/About';
import Footer from './components/Footer';
import Login from './components/Login';


function App() {
  const [token, setToken] = useState();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="wrapper">
      <h1>Application</h1>

      <Header />
      <Sidebar />
      <About />
      <Login />
      <Footer />

    </div>
  );
}

export default App;
