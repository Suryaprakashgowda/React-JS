import React from 'react'
import Navbar from './components/Navbar.jsx'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home.jsx'
import AddStudent from './pages/AddStudent.jsx'
import ViewStudent from './pages/ViewStudent.jsx'
import UpdateStudent from './pages/UpdateStudent.jsx'
const App = () => {
  return (
    <>  
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add-student" element={<AddStudent />} />
      <Route path="/view-students" element={<ViewStudent />} />
      <Route path="/updateStudent/:id" element={<UpdateStudent/>}/>
    </Routes>
    </>
  )
}

// :id -> slug

export default App