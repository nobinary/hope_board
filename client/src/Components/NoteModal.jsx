import React from 'react'
import ReactModal from 'react-modal'
// import Modal from "../Components/Modal"
// import PropTypes from "prop-types";
import '../Style/Modal.scss'

class NoteModal extends React.Component {
    constructor() {
        super();

        this.state = {
            showModal: false
        };

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleOpenModal () {
        this.setState({ showModal: true });
    }

    handleCloseModal () {
        this.setState({ showModal: false });
    }

    render() {
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
               contentLabel="Minimal Modal Example"
               className="Modal"
               overlayClassName="Overlay"
               onRequestClose={this.handleCloseModal}
            >
              <div>Create Note</div>
              <button onClick={this.handleCloseModal}>Post</button>
            </ReactModal>
          </div>
        )
    }
}


export default NoteModal