import React from 'react'
import Navbar from './components/Navbar'
import Homepage from './pages/Homepage'
import { Routes,Route } from 'react-router-dom'
import Phone from './pages/Phone'
import Profile from './pages/Profile'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/phone' element={<Phone/>}/>
    </Routes>
     </>
  )
}

export default App