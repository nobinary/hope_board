import React, { Component } from 'react'
import {createLike} from '../Services/ApiMethods'
import '../Style/Note.scss'

class Note extends Component {
  constructor(props) {
    super(props)
    this.state = { 
     user_id: "",
     note_id: "" 
    }
  }

 handleChange = (e) => {
   this.setState({ 
   user_id: e.target.value, 
   note_id: e.target.name
   })
   console.log(this.State)
  this.sendLike()
  }

  sendLike = () => {
       console.log(this.State)
      createLike(this.state)
  }
    
    render() {
    return (
      <div id="note_main">
          <div className={ `main_note ${this.props.color}`}>
          <p> {this.props.content}</p>
          <p> author: {this.props.user_id}</p>
          <p>date: 00/00/00
            {/* date needs formatting on back end? */}
          {/* {props.created_at} */}
          </p>
          <div className="like_box">
          <button
          onClick={this.handleChange}
          className="like_content"
          value={this.props.user_id}
          name={this.props.note_id}
          >LIKE</button>
          <p className="like_content"> num likes: {this.props.num_likes}</p>
          </div>
          </div>
      </div>
    );
  }
}
  
  export default Note;
