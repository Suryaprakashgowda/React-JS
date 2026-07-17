import React,{useState,useEffect} from 'react'
import Navbar from '../components/Navbar'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
const UpdateStudent = () => {
      const [name, setName] = useState("");
      const [email, setEmail] = useState("");
      const [phone, setPhone] = useState("");
      const [dept, setDept] = useState("");
      const [course, setCourse] = useState("");

      let {id}=useParams() // destructing and getting only the id from url

      const navigate=useNavigate()
      
      useEffect(()=>{
        axios.get(`http://localhost:3000/users/${id}`).then(x=>{
            setName(x.data.name)
            setEmail(x.data.email)
            setPhone(x.data.phone)
            setDept(x.data.dept)
            setCourse(x.data.course)
        })
      },[])

      function handleUpdate(e){
        e.preventDefault()
        const newData={name,email,phone,dept,course}
        axios.put(`http://localhost:3000/users/${id}`,newData)
        .then(()=>{
        toast.success("updated....")
        navigate("/view-students")
      }).catch(err=>toast.error("Failed to update"))
      
      }
  return (
    <>
    <Navbar />
      <center>
        <h1>Update Student</h1>
      </center>
      <form onSubmit={handleUpdate} method='put'
        className="add-student-form">
        <input
          type="text"
          placeholder="Name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="phone"
          placeholder="Phone"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="text"
          placeholder="Dept"
          required
          value={dept}
          onChange={(e) => setDept(e.target.value)}
        />
        <input
          type="text"
          placeholder="Course"
          required
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        />
        <button type="submit">Update Student</button>
      </form>
    </>
  )
}

export default UpdateStudent