import React,{useEffect,useState} from 'react'
import Navbar from '../components/Navbar.jsx'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const ViewStudent = () => {
  const navigate=useNavigate()
  const [students, setStudents] = useState([])
  function fetchData() {
    axios.get("http://localhost:3000/users")
      .then((res) => {
        setStudents(res.data)
      })
      .catch((err) => {
        console.error(err)
        toast.error("Failed to fetch students.")
      })
  }
  function handleUpdate(id){
    navigate(`/updateStudent/${id}`)
  }
  function handleDelete(id){
    axios.delete(`http://localhost:3000/users/${id}`)
    .then(()=>{
      toast.success("Deleted...")
      fetchData()
    }).catch(err=>toast.error("Failed to delete.."))
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
    <Navbar />
      <center><h1>Student List </h1></center>
      <div className='student-list'>
      {students.map((x) => {
        return <div className='student-card' key={x.id}>
          <h2>Name:-{x.name}</h2>
          <p>Email:-{x.email}</p>
          <p>Phone:-{x.phone}</p>
          <p>Dept:-{x.dept}</p>
          <p>Course:-{x.course}</p>
          <div className='btn-container'>
          <button className='btn-edit'onClick={()=>{handleUpdate(x.id)}} >Edit</button>
          <button className='btn-danger' onClick={()=>{handleDelete(x.id)}}>Delete</button>
          </div>
        </div>
      })}
      </div>
    </>
  )
}

export default ViewStudent