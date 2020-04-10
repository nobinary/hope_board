import React from 'react'
import FPButton from '../Shared Components/FPButton'
import {Link} from 'react-router-dom'

function Footer() {
    return (
      <div className="footer_main">
          <p>This is set up as a footer w/ the overlay buttons </p>
          <Link to="/createnote">
          <FPButton text="This is a CREACTE NOTE  (+) Button" />
          </Link>
          <Link to="/about">
          <FPButton text="This is an ABOUT (?) Button" />
          </Link>
      </div>
    );
  }
  
  export default Footer;