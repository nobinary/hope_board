import React from 'react'
import '../Style/Note.scss'

function Note(props) {

    return (
      <div id="note_main">
          <div className={ `main_note ${props.color}`}>
          {console.log(props.color)}
          <p> {props.content}</p>
          <p> author: {props.user_id}</p>
          <p>date: 00/00/00
            {/* date needs formatting on back end? */}
          {/* {props.created_at} */}
          </p>
          <div className="like_box">
          <button className="like_content">LIKE</button>
          <p className="like_content"> num likes: {props.num_likes}</p>
          </div>
          </div>
      </div>
    );
  }
  
  export default Note;
