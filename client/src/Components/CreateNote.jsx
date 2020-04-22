import React, { Component } from "react";
import { postNote} from '../Services/ApiMethods'
import "../Style/CreateNote.scss";
import MenuContainer from "../Components/MenuContainer";

class CreateNote extends Component {
  constructor() {
    super();
    this.state = {
      user_id: 0,
      content: "",
    };
  }

  handleChange = event =>
    this.setState({
      [event.target.name]: event.target.value,
    });

  onNoteSubmit = event => {
    event.preventDefault();
    const { user_id, content} = this.state;
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
      <div className="note_main">
        <img
          id="background"
          className="img-responsive"
          src="https://i.imgur.com/V324XgZ.jpg"
          alt="brown corkboard background"
        />
        <div className="nav-link">
          <MenuContainer />
        </div>
        <div id="blue-note"></div>
        <main className="register-form">
          <h1>Post Note</h1>
          <form id="register-input" onSubmit={this.onNoteSubmit}>
            <label id="label">
              How are you feeling?
            </label>
            <input
              type="text"
              placeholder="text"
              onChange={this.handleChange}
              id="input"
              name="content"
              value={content}
              required
            ></input>
                <button type="submit" id="submit" className="btn btn-default">
              Submit
            </button>
          </form>
        </main>
      </div>
    );
  }
}

export default CreateNote;
