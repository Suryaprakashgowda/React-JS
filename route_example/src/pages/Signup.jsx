import React from 'react'
import Navbar from '../components/Navbar'
const Signup = () => {
  return (
    <>
      <Navbar/>
      
      <div className='Signup'>
        <div className='Signup-form'>
        <center><h1>Signup</h1></center>
        <p>Create a new account</p>
        <input type="text" placeholder='Username' />
        <input type="email" placeholder='Email' />
        <input type="password" placeholder='Password' />
        <button>Sign Up</button>
        </div>
      </div>
    </>
  )
}

export default Signup