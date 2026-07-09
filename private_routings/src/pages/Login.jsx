import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import {toast} from "react-toastify";
const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  
  function login(e){
    e.preventDefault()
    // Handle login logic here
    if(username === 'admin' && password === 'admin'){
      // alert('Login successful')
      toast.success("Login Successfull")
      localStorage.setItem('loggedIn', true)
      navigate('/dashboard')
    }else{
      // alert('Invalid credentials')
      toast.error("Invalid credentials")
    }
  }

  return (
    <>
    <center><h1>Login Page</h1></center>
    <center>
    <form action="" onSubmit={login}>
      <input type="text" placeholder='Username' required value={username} onChange={(e) => setUsername(e.target.value)}/><br/>
        <br/>
      <input type="text" placeholder='Password' required value={password} onChange={(e) => setPassword(e.target.value)}/> <br/>
      <br/>
      <button>Login</button>
    </form>
    </center>
    </>
  )
}

export default Login