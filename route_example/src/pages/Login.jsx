import React from 'react'
import Navbar from '../components/Navbar'
const Login = () => {
  return (
    <>
      <Navbar/>
      <div className='Login'>
        <div className='Login-form'>
        <center><h1>Login</h1></center>
        <input type="text" placeholder='Username' />
        <input type="password" placeholder='Password' />
        <button>Login</button>
        </div>
      </div>
    </>
  )
}

export default Login