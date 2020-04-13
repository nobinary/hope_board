import React from 'react'
import '../Style/Note.scss'

// pass API props down from Board/MyBoard mapping
function Note(props) {
    return (
      <div id="note_main">
          <div class="main_note">
          <p> This is a Note</p>
          </div>
      </div>
    );
  }
  
  export default Note;