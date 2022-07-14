import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
// import Sidebar from './components/Sidebar';
// import About from './components/About';
import ContactForm from './components/Contact.js';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';

function App() {
  const [AC] = useState([
    {
      name: 'Movie Search',
      description: '',
    },
    { name: 'portraits', description: '' },
    { name: 'food', description: '' },
    { name: 'landscape', description: '' },
  ]);

  // sets what appears in main part of page
  const [currentCategory, setCurrentCategory] = useState(AC[0]);
  const [searchSelected, setSearchSelected] = useState(false);
  const [contactSelected, setContactSelected] = useState(false);

  // function to display main page
  return (
    <div>
      <Header
        AC={AC}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        searchSelected={searchSelected}
        setSearchSelected={setSearchSelected}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      >
      </Header>
      <main>
        {!contactSelected ? (
          <>
          </>
        ) : (
          <ContactForm></ContactForm>
        )
        }
        {!searchSelected ? (
          <>
          </>
        ) : (
          <SearchBar></SearchBar>
        )
        }
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
