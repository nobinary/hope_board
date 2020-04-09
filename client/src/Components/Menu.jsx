import React from 'react'
import {Link} from 'react-router-dom'
import '../Style/Menu.css'

function Menu() {
    return (
      <div className="menu_main">
          <p>This is a not-yet-hidden navigation menu</p>
          <Link to="/">Home</Link>
          <Link to="/Login">Login</Link>
          <Link to="/Register">Register</Link>
      </div>
    );
  }
  
  export default Menu;