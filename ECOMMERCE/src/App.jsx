import React from 'react'
import Homepage from './pages/Homepage.jsx'
import {Routes,Route} from 'react-router-dom'
import Signup from './pages/Signup.jsx'
import Login from './pages/Login.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Products from './pages/Products.jsx'
 
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/productdetails/:id" element={<Products/>}/>
      </Routes>
    </>
  )
}

export default App