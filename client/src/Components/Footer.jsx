import React from 'react'
// import FPButton from '../Shared Components/FPButton'
import "../Style/Footer.scss"
import NoteModal from '../Components/NoteModal'
import {Link} from 'react-router-dom'

function Footer() {
    return (
      <div id="footer_main">
          <NoteModal />
          <img 
          src="https://i.imgur.com/JgBnwAE.png" 
          id="about-icon" 
          className="img-responsive"
          alt="white info icon that directs you to how website works" 
          />
      </div>
    );
  }
  
  export default Footer;