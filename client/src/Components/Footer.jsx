import React from 'react'
import FPButton from '../Shared Components/FPButton'
import "../Style/Footer.scss"
import {Link} from 'react-router-dom'

function Footer() {
    return (
      <div id="footer_main">
          {/* <p>This is set up as a footer w/ the overlay buttons </p> */}
          <Link to="/createnote">
          <img 
          src="https://i.imgur.com/n71V3jf.png" 
          id="create-icon" 
          alt="white plus button to create a post" 
          />
          {/* <FPButton text="This is a CREACTE NOTE  (+) Button" /> */}
          </Link>
          <Link to="/about">
          <img 
          src="https://i.imgur.com/XpHvJ9h.png" 
          id="about-icon" 
          alt="white info icon that directs you to how website works" 
          />
          {/* <FPButton text="This is an ABOUT (?) Button" /> */}
          </Link>
      </div>
    );
  }
  
  export default Footer;