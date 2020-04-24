import React, { Component } from 'react'
import {createLike, deleteLike, deleteNote } from '../Services/ApiMethods'
import '../Style/Note.scss'

class Note extends Component {
  constructor(props) {
    super(props)
    this.state = { 
     user_liked: null,
     num_likes: 0,
     error_msg: null,
     delete_btn: false
    }
  }

  componentDidMount = () => {
    this.setState({
      num_likes: this.props.num_likes,
      user_liked: this.props.user_liked, 
      delete_btn: this.props.delete_btn
    });
  }

  handleChange = (e) => {
    let noteData = { 
      user_id: e.target.value,
      note_id: e.target.name
      }
      deleteNote(noteData)
  }

  renderBtn = () => {
    console.log()
    const toggleForm = this.state.delete_btn ? "danger" : "";
    if (this.state.delete_btn ) {
      return (
        <button 
        className={toggleForm, "delete-btn"}
        onClick={this.handleChange}
        value={this.props.user_id}
        name={this.props.note_id}
        >
          delete
        </button>
      );
    } else {
      return null
    }
  };


  clickLike = async (e) => {
    let likeData = { 
    user_id: this.props.activeId, 
    note_id: e.target.name
    }
    // console.log(likeData)

    if (this.state.user_liked === false) {
      try {
        const res = await createLike(likeData);
        if (res.status === 201) {
          this.setState(state => ({ num_likes: state.num_likes++, user_liked: true }))
        }
      } catch (error) {
        this.setState({error_msg: error})
      }
    } else {
      try {
        const res = await deleteLike(likeData);
        if (res.status === 200) {
          this.setState(state => ({ num_likes: state.num_likes--, user_liked: false }))
        }
      } catch (error) {
        this.setState({error_msg: error})
      }
    }
  }

    
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
             {this.renderBtn()}
              <img
              src="https://i.imgur.com/Dh7Znb8.png"
              onClick={this.clickLike}
              className="like-button btn btn-default"
              value={this.props.user_id}
              name={this.props.note_id}
              alt="corkboard"
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



