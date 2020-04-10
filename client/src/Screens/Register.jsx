import React from 'react'
import Modal from '../Shared Components/Modal'

function Register() {
    return (
      <div className="note_main">
          <p>This is Registration</p>
          <Modal 
          field_num="2"
          input1="login"
          input2="password"
          />
      </div>
    );
  }
  
  export default Register;