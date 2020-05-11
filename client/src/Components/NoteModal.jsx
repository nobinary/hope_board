import React from 'react'
import ReactModal from 'react-modal'
import { postNote } from '../Services/ApiMethods'
// import Modal from '../Components/Modal'
import '../Style/NoteModal.scss'

class NoteModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      user_id: this.props.userId,
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

    assignColor = () => {
      let number = Math.floor(Math.random() *5)
      let colorArray = ["blue", "green", "pink", "yellow", "orange"]
      return colorArray[number]
    }  
  
    onNoteSubmit = event => {
      event.preventDefault();
      const { user_id, content } = this.state;
      console.log(user_id)
      const noteData = {
        note: {
          user_id: this.props.userId,
          content: content,
          color: this.assignColor()
        }
      };

      postNote(noteData)
        .then(data => {
          console.log(data);
          this.handleCloseModal();
          this.props.refresh();
        })
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
          // src="https://i.imgur.com/Df7R8tu.png"
          src="https://i.imgur.com/jyjtEOG.png"
          id="create-icon"
          className="img-responsive"
          alt="black plus button to create a post"
        />
        <ReactModal
          isOpen={this.state.showModal}
          contentLabel="Minimal Modal"
          className="Modal"
          overlayClassName="Overlay"
          ariaHideApp={false}
          onRequestClose={this.handleCloseModal}
        >
          <div className="button-contain">
          <button
            onClick={this.handleCloseModal}
            className="btn btn-default"
            id="close-button"
            >X</button>
            </div>
          
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
            <div className="post-cont">

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