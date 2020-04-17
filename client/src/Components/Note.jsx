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
   let likeData = [{ 
   user_id: e.target.value, 
   note_id: e.target.name
   }]
  //  console.log(likeData)
  createLike(likeData)
  }

////ISSUE: setting state is delayed 
  // sendLike = () => {
  //     console.log(this.State)
  //     createLike(this.state)
  // }
    
    render() {
    return (
      <div id="note_main">
          <div className={ `main_note ${this.props.color}`}>
            <div className="date-from">
          <p className="author-text"> {this.props.user_name}</p>
          <p className="date-content">{this.props.ago_string}</p>
          </div>
          <p className="text-content"> {this.props.content}</p>
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
