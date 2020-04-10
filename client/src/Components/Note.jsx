import React from 'react'
import '../Style/Note.css'

// pass API props down from Board/MyBoard mapping
function Note(props) {
    return (
      <div className="note_main">
          <div className="main_note">
          <p> This is a Note</p>
          </div>
      </div>
    );
  }
  
  export default Note;