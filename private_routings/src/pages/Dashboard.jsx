import React from 'react'
import { useNavigate } from 'react-router-dom'
import {toast} from "react-toastify";
const Dashboard = () => {
  const navigate = useNavigate()
  function logout(){
    localStorage.removeItem('loggedIn')
    toast.success("Logout Successfull")
    navigate('/')
  }
  return (
   <>
   <center><h1>Welcome To Dashboard</h1></center>
   <center><button onClick={logout}>Logout</button></center>
   <center><button onClick={()=>navigate('/profile')}>Go To Profile</button></center>
   </>
  )
}

export default Dashboard