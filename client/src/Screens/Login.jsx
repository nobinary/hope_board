import React from 'react'
import BigPostIt from '../Shared Components/BigPostIt'
import '../Style/Login.scss'

function Login() {
  return (
    <div id="note_main">
      <img 
      id="background" 
      class="img-responsive" 
      src="https://i.imgur.com/PYvrnAk.jpg" 
      alt="brown corkboard background" 
      />
      {/* <BigPostIt
        type="login"
      /> */}
      <div id="yellow-note"></div>
      <main class="login-form">
        <p>Nice to see you again!</p>
        <h1>Login</h1>
        <form id="login-input">
          <label id="label" for="username">
            Username
            </label>
            <input
              type="text"
              placeholder="Enter your username"
              id="input"
              required
            >
            </input>
          <label id="label" for="password">
            Password
            </label>
            <input
              type="text"
              placeholder="Enter your password"
              id="input"
              required
            >
            </input>
        <button 
        type="submit" 
        id="submit"
        class="btn btn-default"
        >
          Submit
          </button>
        </form>

      </main>
    </div>
  );
}

export default Login;