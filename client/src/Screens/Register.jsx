import React from 'react'
import '../Style/Register.scss'
import BigPostIt from '../Shared Components/BigPostIt'

function Register() {
    return (
      <div id="note_main">
          {/* <BigPostIt
          type="registration"
          /> */}
      <img 
      id="background"
      class="img-responsive" 
      src="https://i.imgur.com/PYvrnAk.jpg" 
      alt="brown corkboard background" 
      />
      <div id="blue-note"></div>
      <main class="register-form">
        <h1>Register</h1>
        <form id="register-input">
         <label id="label" for="name">
           Name
           </label> 
           <input 
           type="text" 
           placeholder="Enter your name" 
           id="input" 
           required>
           </input>
           <label id="label" for="username">
             Username
             </label>
             <input 
             type="text" 
             placeholder="Enter your username" 
             id="input" 
             required>
               </input>
            <label id="label" for="password">
              Password
              </label>
              <input 
              type="text" 
              placeholder="Enter your password" 
              id="input" 
              required>
              </input>
              <button 
              type="submit" 
              id="submit"
              class="btn btn-default"
              >
                Submit
              </button>
              <p id="member-link">Already a member? Login <a href="/login">here</a>.</p>

        </form>
      </main>
      

      </div>
    );
  }
  
  export default Register;