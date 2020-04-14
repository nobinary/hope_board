import React from 'react'
import '../Style/Note.scss'
import axios from 'axios'

// pass API props down from Board/MyBoard mapping
function Note(props) {
  // swich assignment of css color
    return (
      <div id="note_main">
          <div className="main_note">
          <p> {props.content}</p>
          <p> author: {props.user_id}</p>
          <p> {props.num_likes}</p>
          </div>
      </div>
    );
  }
  
  export default Note;

//   id: 50,
// color: "blue",
// content: "Portland literally post-ironic normcore.",
// num_likes: 1,
// created_at: "2020-04-13T17:41:14.472Z",
// updated_at: "2020-04-13T17:41:14.931Z",
// user_id: 10