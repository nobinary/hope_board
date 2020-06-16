import React from "react";
import ReactModal from "react-modal";
import { fetchNote, updateNote } from "../Services/ApiMethods";
import "../Style/AboutModal.scss";

class EditModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        showModal: false,
        user_id: this.props.userId,
        note_id: this.props.note_id,
        content: "",
      };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  componentDidMount() {
    this.getNote();
  }

  getNote = async () => {
    console.log("got note!" + this.props.note_id);
    let note = await fetchNote(this.props.note_id);
    console.log(note);
    this.setState(state => ({
      content: note.data.content
    }));
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onNoteSubmit = event => {
    event.preventDefault();
    const { note_id, content } = this.state;
    console.log(note_id);
    const noteData = {
      note: {
        id: note_id,
        content: content
      }
    };

    updateNote(noteData)
      .then(data => {
        console.log(data);
        this.handleCloseModal();
        this.props.refresh();
      })
      .catch(error => {
        console.error(error);
      });
  };

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  render_update_btn()  {
      const toggleForm = this.props.update_btn ? "danger" : "";
      if (this.props.update_btn === "true") {
        return (
          <button
          id="update-btn"
          className={`${this.props.color}`}
          onClick={this.updateClick}
          value={this.props.userId}
          name={this.props.note_id}
          onClick={this.handleOpenModal}
        >
          Update
        </button> 
        );
      } else {
        return null
      }
    }

  render() {
    return (
      <div>
        {this.render_update_btn()}
        <ReactModal
          isOpen={this.state.showModal}
          ariaHideApp={false}
          transparent={true}
          contentLabel="Minimal Modal Example"
          className={` Modal ${this.props.color}`}
          overlayClassName="edit-overlay"
          onRequestClose={this.handleCloseModal}
        >
          <form className="create-form" onSubmit={this.onNoteSubmit}>
            <textarea
              type="text"
              onChange={this.handleChange}
              name="content"
              value={this.state.content}
              //   placeholder="Write thoughts and ideas here..."
              className={`input  ${this.props.color}`}
              required
            ></textarea>
            <div className="post-cont">
              <button type="submit" id="submit" className="btn btn-default">
                Update
              </button>
            </div>
          </form>
          <button
            id="close-button"
            className="btn btn-default"
            onClick={this.handleCloseModal}
          >
            Close
          </button>
        </ReactModal>
      </div>
    );
  }
}
export default EditModal;

// export default class EditFood extends Component {
//   constructor() {
//     super()
//     this.state = {
//       name: '',
//       description: '',
//       image_url: '',
//       rating: '',
//       errorMsg: '',
//     }
//   }

//   handleChange = e => this.setState({ [e.target.name]: e.target.value })

//   render() {
//     const { name, description, image_url, rating } = this.state
//     return (
//       <div >
//         <h3>edit your post</h3>

//         {this.state.errorMsg ? (
//           <p className="error-text">{this.state.errorMsg}</p>
//         ) : null}
//       </div>
//     )
//   }
// }
