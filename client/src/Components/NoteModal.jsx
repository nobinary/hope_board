import React from 'react'
import ReactModal from 'react-modal'
import { postNote } from '../Services/ApiMethods'
// import Modal from '../Components/Modal'
import '../Style/NoteModal.scss'

class NoteModal extends React.Component {
  constructor() {
    super();

    this.state = {
      showModal: false,
      user_id: 0,
      content: "",
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  //MODAL FUNCTION

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  //CreateNote Function

  handleChange = event =>
    this.setState({
      [event.target.name]: event.target.value,
    });

  onNoteSubmit = event => {
    event.preventDefault();
    const { user_id, content } = this.state;
    const noteData = {
      note: {
        user_id: user_id,
        content: content
      }
    };

    postNote(noteData)
      .catch(error => {
        console.error(error);
      });
  };




  render() {
    const { user_id, content } = this.state;
    return (
      <div>
        <img
          onClick={this.handleOpenModal}
          src="https://i.imgur.com/Df7R8tu.png"
          id="create-icon"
          className="img-responsive"
          alt="white plus button to create a post"
        />
        <ReactModal
          isOpen={this.state.showModal}
          contentLabel="Minimal Modal"
          className="Modal"
          overlayClassName="Overlay"
          ariaHideApp={false}
          onRequestClose={this.handleCloseModal}
        >
          <img
            src="https://i.imgur.com/OgwveVc.png"
            onClick={this.handleCloseModal}
            className="btn btn-default"
            id="close-button"
          />
          <form className="create-form" onSubmit={this.onNoteSubmit}>
            <textarea
              type="text"
              onChange={this.handleChange}
              name="content"
              value={content}
              placeholder="Write thoughts and ideas here..."
              className="input"
              required
            ></textarea>
            <div className="button-cont">

            <button
              type="submit"
              id="submit"
              className="btn btn-default"
            >
              Post
                  </button>
                  </div>
          </form>

        </ReactModal>
      </div>
    )
  }
}

// Modal.setAppElement('#app-base');

export default NoteModal;