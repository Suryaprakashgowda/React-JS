import React from 'react'

const Login = (props) => {
    function LoginClose(){
        props.setShowLogin(false)
    }
  return (
    <>
    <div className='overlay'>
            <div className='modal'>
                <h1>Login page</h1>
                <input type="text" placeholder='Enter username' /><br />
                <input type="text" placeholder='Enter password'/> <br/>
                <button className='btn'>Login</button>
                <button onClick={LoginClose} className='btn'>Cancel</button>

            </div>
        </div>
    </>
  )
}

export default Login