import React, { useState } from 'react';
import { MenuItems } from "./MenuItems";
import burger from "./burger.svg";
import burgerFlip from "./burgerflip.svg";
import { Link } from "react-router-dom";
import './Navbar.css';
import { BurgerItems } from './BurgerItems';


function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  // shows the state of the sidebar if sidebar !sidebar is true.
  const showSidebar = () => setSidebar(!sidebar)

  return(

    /* This nav tag creates the hamburger icon in the navbar. */
    <nav className="navbarItems">
      <div className="menu-icon">
        <Link className='burger'>
          <img src={burger} alt='burger' onClick={showSidebar}/>
        </Link>
      </div>

      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className="nav-menu-items">
          <li className='navbar-toggle'>
            <Link to='#' className='menu-bars'>
              <img src={burgerFlip} alt='burgerflip' onClick={showSidebar} />
            </Link>
          </li>
          {BurgerItems.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                Overdue Tasks
              </li>
            )
          })}
        </ul>
      </nav>

      {/* The ul tags below creates the add button usericon in the nav bar. */}
      
      <ul className='right-side'> 
        {MenuItems.map((item, index) => {
          return(
            <li key={index} className='right-side-nav'>
              <a className={item.cName}>
                {item.label}
              </a>
            </li>
          )
        })}
      </ul>
      <img id = "will smith :)" src = "./willy.jpg" />
    </nav>

  )
 

  
}



export default Navbar
