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
                    <div className="hiw-header">Welcome to MindBoard!</div>
                    <main className="hiw-body">
                        <p>At MindBoard we understand lorem ipsum dolor ipset.</p>
                        <p>Browse and click on any note to see what it says.</p>
                        <p>If you register, you can access to create and like notes!</p>
                        <p>Once you login, you will have access to MyBoard, which saves all of your posts and favorites.</p>
                    </main>
                    <button 
                    id="close-button"
                    className="btn btn-default"
                    onClick={this.handleCloseModal}>Close</button>
                    </ReactModal> 
                
            </div>
        )
    }
}
export default AboutModal