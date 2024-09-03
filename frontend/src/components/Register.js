import React from 'react'
import { Link } from 'react-router-dom'

const register = () => {
  return (
    <div>
      <div>
      <Link to='/'>Home</Link>
      </div>
      <form>
      <h1> Register here</h1>
        <p>Username:</p>
        <input type='text'/>
        <p>first name:</p>
        <input type='text'/>
        <p>last name:</p>
        <input type='text'/>
        <p>password:</p>
        <input type='password'/>
        <p>Re-enter password:</p>
        <input type='password'/>
        <p>E-mail:</p>
        <input type='email'/>
        <button type='submit'>Register</button>
      </form>
        
        <p>Already a user? <span><Link to='/login'>Login here!</Link></span></p>
    </div>
  )
}

export default register