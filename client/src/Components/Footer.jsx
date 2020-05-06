import React from 'react'
// import FPButton from '../Shared Components/FPButton'
import "../Style/Footer.scss"
import NoteModal from '../Components/NoteModal'
import AboutModal from '../Components/AboutModal'
import {Link} from 'react-router-dom'

function Footer(props) {
    return (
      <div id="footer_main">
          <NoteModal userId={props.userId} />
          <AboutModal />
          {/* <img 
          src="https://i.imgur.com/JgBnwAE.png" 
          id="about-icon" 
          className="img-responsive"
          alt="white info icon that directs you to how website works" 
          /> */}
      </div>
    );
  }
  
  export default Footer;