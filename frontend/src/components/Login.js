import React from 'react'
import {Link} from 'react-router-dom'
const login = () => {
  return (
    <div>
      <div>
      <Link to='/'>Home</Link>
      </div>
      <form >
      <h1>Login page</h1>
        <p>Enter username:</p>
        <input type='text' />
        <p>Enter password:</p>
        <input type='password'/>
        <button type='submit'>Login</button>
      </form>
       
        <p>New user?<span><Link to='/register'> Register here </Link></span></p>
        
    </div>
  )
}

export default login