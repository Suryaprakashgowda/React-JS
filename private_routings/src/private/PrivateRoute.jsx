import React from 'react'
import { Navigate } from 'react-router-dom'
import {toast} from "react-toastify"; 
const PrivateRoute = (props) => {
    let isLoggedIn = localStorage.getItem('loggedIn')
    console.log(isLoggedIn) //string
    // if (isLoggedIn === 'true') {
    if(isLoggedIn){
        return props.children
    }else{
        toast.warn("Please login first")
        return <Navigate to="/"/>
    }
}

export default PrivateRoute