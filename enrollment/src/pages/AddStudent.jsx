import React from 'react'
import Navbar from '../components/Navbar.jsx'
import {useState} from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
const AddStudent = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [dept, setDept] = useState('')
  const [course, setCourse] = useState('')

//   console.log(name,email,phone,dept,course)
  function handleAddStudent(e){
    e.preventDefault()
    const data = {name,email,phone,dept,course}
    axios.post('http://localhost:3000/users',data)
    .then((res) => {
        console.log(res)
        toast.success('Student added successfully!')
    })
    .catch((err) => {
        console.error(err)
        toast.error('Failed to add student.')
    })
    console.log(data)
    setName('')
    setEmail('')
    setPhone('')
    setDept('')
    setCourse('')
  }
  return (
    <>
    <Navbar />
    <center><h1>Add Student</h1></center>
    <form className="add-student-form" onSubmit={handleAddStudent} method="post">
        <input type="text" placeholder="Name" required value={name} onChange={(e) => setName(e.target.value)} />
        <input type="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="phone" placeholder="Phone" required value={phone} onChange={(e) => setPhone(e.target.value)} />
        <input type="text" placeholder="Dept" required value={dept} onChange={(e) => setDept(e.target.value)} />
        <input type="text" placeholder="Course" required value={course} onChange={(e) => setCourse(e.target.value)} />
        <button type="submit">Add Student</button>
    </form>
    </>
  )
}

export default AddStudent