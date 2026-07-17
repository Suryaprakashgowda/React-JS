import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from "axios";
const Signup = () => {
  const [user, setUser] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")

  function signup(e){
    e.preventDefault()
    const data={user,email,phone,password}
    axios.post("http://localhost:3000/users",data)
    .then(()=>{
        toast.success("Signup Success")
        setUser("")
        setEmail("")
        setPhone("")
        setPassword("")
    }).catch(err=>toast.error("Failed to Signup"))
  }

  return (
    <>
      <center><h1>Signup Page</h1></center>

      <div className="form">
        <form onSubmit={signup}>
          <input
            type="text"
            placeholder="Enter Username"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            required
          />
          <br />

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br />

          <input
            type="text"
            placeholder="Enter Mobile No"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <br />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br />

          <button id="signup">Signup</button>

          <p>
            Are you an existing user?{" "}
            <Link to="/login">Login here</Link>
          </p>
        </form>
      </div>
    </>
  )
}

export default Signup