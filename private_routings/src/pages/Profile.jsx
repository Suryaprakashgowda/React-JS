import React from 'react'
import { useNavigate } from 'react-router-dom'
const Profile = () => {
  const navigate = useNavigate()
  return (
    <>
    <center><h1>Welcome To Profile</h1></center>
    <center><button onClick={()=>{navigate('/dashboard')}}>Back to Dashboard</button></center>
   
    </>
  )
}

export default Profile