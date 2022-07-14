import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../utils/helpers';
import './Header.css'

function Header(props) {
  const {
    categories = [],
    setCurrentCategory,
    contactSelected,
    currentCategory,
    setContactSelected,
    searchSelected,
    setSearchSelected
  } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
  }, [currentCategory]);

  return (
    <header className="flex-row px-1">
      <h1>
        <a data-testid="link" href="/"><span role="img" aria-label="camera"></span>Movie Search</a>
      </h1>
      <h2>
        Search your favorite movies, leave reviews!
      </h2>
      <nav>
        <ul className="flex-row">
          <li>
            <></>
          </li>

          <li className={`mx-2 ${searchSelected && 'navActive'}`}>
            <span class='linkStyle' onClick={ event => {setSearchSelected(true); setContactSelected(false)}} >Search</span>
          </li>
          
          {categories.map((category) => (
            <li className={
              `mx-1 ${ currentCategory.name === category.name && !searchSelected && 'navActive'}`
              } key={category.name} >
              <span
                onClick={() => {
                  setCurrentCategory(category);
                  setSearchSelected(false);
                }}
              >
                {capitalizeFirstLetter(category.name)}
                </span>
            </li>
            ))}  

          <li className={`mx-2 ${contactSelected && 'navActive'}`}>
            <span onClick={() => setContactSelected(true)} class='linkStyle'>Contact</span>
          </li>
          
          {categories.map((category) => (
            <li className={`mx-1 ${ currentCategory.name === category.name && !contactSelected && 'navActive' }`} key={category.name} >
              <span onClick={() => { setCurrentCategory(category); setContactSelected(false); }} >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;


/*
import React from 'react';
import './Header.css';


function Header() {
    return (
        <div className='header'>
            <h1>Movie Meet Up</h1>
            <nav class="menu">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </div>
    )
};

export default Header;

*/

//Header component then Nav component
//Responsive
//Have navbar in div component
//nav bar has login, signup
//after logging in, dashboard, movies, events