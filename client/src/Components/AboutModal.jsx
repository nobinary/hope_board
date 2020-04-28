import React from 'react'
import ReactModal from 'react-modal'
import "../Style/AboutModal.scss"


class AboutModal extends React.Component {
    constructor() {
        super();

        this.state = {
            showModal : false
        };

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleOpenModal () {
        this.setState({ showModal: true });
    }

    handleCloseModal () {
        this.setState({ showModal: false});
    }

    render() {
        return (
            <div>
                <img
                onClick={this.handleOpenModal}
                // src="https://i.imgur.com/JgBnwAE.png" 
                src="https://i.imgur.com/I2oqk60.png"
                id="about-icon" 
                className="img-responsive"
                alt="black info icon that directs you to how website works"
                />
                <ReactModal 
                    isOpen={this.state.showModal} 
                    contentLabel="Minimal Modal Example" 
                    className="Modal" 
                    overlayClassName="Overlay" 
                    onRequestClose={this.handleCloseModal}
                    >
                    <div>How it Works</div>
                    <button onClick={this.handleCloseModal}>Close</button>
                    </ReactModal> 
                
            </div>
        )
    }
}
export default AboutModal