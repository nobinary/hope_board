import React, { Component } from 'react'
import {createLike, deleteLike } from '../Services/ApiMethods'
import '../Style/Note.scss'

class Note extends Component {
  constructor(props) {
    super(props)
    this.state = { 
     user_liked: null,
     num_likes: 0,
     error_msg: null
    }
  }

  componentDidMount = () => {
      this.setState({
        num_likes: this.props.num_likes,
        user_liked: this.props.user_liked      
      });
  }

  clickLike = async (e) => {
    let likeData = { 
    user_id: this.props.activeId, 
    note_id: e.target.name
    }
    // console.log(likeData)

    if (this.state.user_liked === false) {
      try {
        const res = await createLike(likeData);
        if (res.status == 201) {
          this.setState(state => ({ num_likes: state.num_likes++, user_liked: true }))
        }
      } catch (error) {
        this.setState({error_msg: error})
      }
    } else {
      try {
        const res = await deleteLike(likeData);
        if (res.status == 200) {
          this.setState(state => ({ num_likes: state.num_likes--, user_liked: false }))
        }
      } catch (error) {
        this.setState({error_msg: error})
      }
    }
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
            <p className="text-content"> {this.props.content}</p>
            <div className="date-from">
              <p className="author-text"> {this.props.user_name}</p>
              <p className="date-content">{this.props.ago_string}</p>
            </div>
            <div className="like_box">
              <p className="like_content">Likes: {this.state.num_likes}</p>
              <img
              src="https://i.imgur.com/Dh7Znb8.png"
              onClick={this.clickLike}
              className="like-button btn btn-default"
              value={this.props.user_id}
              name={this.props.note_id}
              />
              {this.state.user_liked ? `XXXXX` : ``}
              {/* replace XXXXX with real user feedback */}
            </div>
          </div>
      </div>
    );
  }
}
  
  export default Note;
