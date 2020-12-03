import React, { Component } from 'react';
import { MenuItems} from "./MenuItems";
import './Navbar.css';

class Navbar extends Component {
  render() {
    return(
      <nav className="navbarItems">
        <div className="menu-icon">

        </div>
        {/* The ul tags below create the items in the nav bar. */}
        <ul>
          {MenuItems.map((item, index) => {
            return(
              <li key={index}>
                <a className={item.cName}>
                  {item.label}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>

    )
  }
}

export default Navbar
