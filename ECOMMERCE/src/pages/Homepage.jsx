import React from 'react'
import '../styles/global.css'
import { useNavigate } from 'react-router-dom'
const Homepage = () => {
  const navigate = useNavigate()
  return (
    <>

      <div className="container">
        <button id="signup-btn" onClick={() => navigate('/signup')}>
          signup
        </button> 
        <button id="login-btn" onClick={() => navigate('/login')}>
          login
        </button>
      </div>
    </>
  )
}

export default Homepage