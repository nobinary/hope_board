import React from 'react'
import Modal from '../Shared Components/Modal'

function Register() {
    return (
      <div className="note_main">
          <Modal 
          type="registration"
          field_num="2"
          input1="login"
          input2="password"
          />
      </div>
    );
  }
  
  export default Register;