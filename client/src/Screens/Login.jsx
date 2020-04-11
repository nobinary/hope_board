import React from 'react'
import BigPostIt from '../Shared Components/BigPostIt'
import '../Style/Login.scss'

function Login() {
  return (
    <div id="note_main">
      <img id="background" src="https://i.imgur.com/PYvrnAk.jpg" alt="brown corkboard background" />
      {/* <BigPostIt
        type="login"
      /> */}
      <div id="yellow-note"></div>
      <main class="login-form">
        <p>Nice to see you again!</p>
        <h1>Login</h1>
        <form id="login-input">
          <label id="label" for="username">
            Username:
            <input
              type="text"
              placeholder="Enter your username"
              id="username"
              required
            >
            </input>
          </label>
          <label id="label" for="password">
            Password:
            <input
              type="text"
              placeholder="Enter your password"
              id="password"
              required
            >
            </input>
          </label>
        <button 
        type="submit" 
        id="submit"
        >
          Submit
          </button>
        </form>

      </main>
    </div>
  );
}

export default Login;