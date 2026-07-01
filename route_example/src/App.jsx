import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Homepage from './pages/Homepage.jsx'
import Signup from './pages/Signup.jsx'
import Login from './pages/Login.jsx'
import Error from './components/Error.jsx'
const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='*' element={<Error/>} />
      </Routes>
    </>
  )
}

export default App