import React from 'react'
import BigPostIt from '../Shared Components/BigPostIt'
import '../Style/Login.scss'

function Login() {
  return (
    <div class="note_main">
      {/* <BigPostIt
        type="login"
      /> */}
      <main id="login-form">
        <p>Welcome Back!</p>
        <h1>Login</h1>
        <form>
          <label for="username">
            Username:
            <input
              type="text"
              placeholder="Enter your username"
              id="username"
              required
            >
            </input>
          </label>
          <label for="username">
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