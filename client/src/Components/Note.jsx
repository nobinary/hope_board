import React, { Component } from 'react'
import { createLike, deleteLike, deleteNote } from '../Services/ApiMethods'
import '../Style/Note.scss'
import ReactModal from 'react-modal'

class Note extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user_liked: null,
      num_likes: 0,
      error_msg: null,
      delete_btn: false,
      showModal: false,
      userId: null
    }

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);

  }

  componentDidMount = () => {
    this.setState({
      num_likes: this.props.num_likes,
      user_liked: this.props.user_liked,
      delete_btn: this.props.delete_btn,
      userId: this.props.userId
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
    if (this.state.delete_btn === "true") {
      return (
        <button
          className={toggleForm, "delete-btn"}
          onClick={this.handleChange}
          value={this.props.userId}
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
      user_id: this.props.userId,
      note_id: e.target.name
    }
    console.log(likeData)

    if (this.state.user_liked === false) {
      try {
        const res = await createLike(likeData);
        if (res.status === 201) {
          this.setState(state => ({ num_likes: state.num_likes++, user_liked: true }))
        }
      } catch (error) {
        this.setState({ error_msg: error })
      }
    } else {
      try {
        const res = await deleteLike(likeData);
        if (res.status === 200) {
          this.setState(state => ({ num_likes: state.num_likes--, user_liked: false }))
        }
      } catch (error) {
        this.setState({ error_msg: error })
      }
    }
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div id="note_main">
        <ReactModal
          isOpen={this.state.showModal}
          contentLabel="Minimal Modal"
          className={`main_note ${this.props.color}`}
          id="Modal"
          overlayClassName="Overlay"
          ariaHideApp={false}
          onRequestClose={this.handleCloseModal}
          setUser={this.setUser} 
        >
           <div>
           {/* {console.log(
             "state" + this.state.delete_btn
           )} */}
          <div
            className="text-content">
            <p>{this.props.content}</p>
          </div>
          <div
            className="date-from">
            <div
              className="author-text">
              <p>{this.props.user_name}</p>
            </div>
            <div
              className="date-content">
              <p>{this.props.ago_string}</p>
            </div>
          </div>
          <div className="like_box">
            <p className="like_content">Likes: {this.state.num_likes}</p>
            {this.renderBtn()}
            <img
              src="https://i.imgur.com/Dh7Znb8.png"
              onClick={this.clickLike}
              className="like-button btn btn-default"
              value={this.props.userId}
              name={this.props.note_id}
              alt="corkboard"
            />
            {this.state.user_liked ? `XXXXX` : ``}
            {/* replace XXXXX with real user feedback */}
          </div>
        </div>
          <button
            onClick={this.handleCloseModal}
            id="close-button-2"
            className="btn btn-default"
            >Close</button>
        </ReactModal>
        <div
          className={`main_note ${this.props.color}`}
          onClick={this.handleOpenModal}
          >
          <div
            className="text-content">
            <p>{this.props.content}</p>
          </div>
          <div
            className="date-from">
            <div
              className="author-text">
              <p>{this.props.user_name}</p>
            </div>
            <div
              className="date-content">
              <p>{this.props.ago_string}</p>
            </div>
          </div>
      </div>
      </div>

    );
  }
}

export default Note;



