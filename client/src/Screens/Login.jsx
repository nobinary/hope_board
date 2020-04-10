import React from 'react'
import Modal from '../Shared Components/Modal'

function Login() {
    return (
      <div className="note_main">
          <Modal 
          type="login"
          field_num="2"
          input1="login"
          input2="password"
          />
      </div>
    );
  }
  
  export default Login;