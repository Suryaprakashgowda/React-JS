import React,{useState,useEffect} from 'react'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const Dashboard = () => {
    const userName=localStorage.getItem("username")
    const [product,setProduct]=useState([])
    let navigate=useNavigate()

    useEffect(()=>{
      axios.get("http://localhost:3000/products").then(x=>setProduct(x.data))
      .catch(err=>console.log(err))
    },[])

    function handleProduct(id) {
      navigate(`/productdetails/${id}`)
      
    }

  return (
    <>
    <Navbar/>
    <center><h1>Welcome {userName}</h1></center>
    <div className='container-card'>
      {product.map((x)=>{
      return <div className='card'>
        <img src={x.product_image} height="200px" width="200px" alt="" />
        <h3>{x.product_name}</h3>
        <button className='btn-nav' onClick={()=>handleProduct(x.product_id)}>View</button>
      </div>
    }
    )}
    </div>
    
    
    </>
  )
}

export default Dashboard