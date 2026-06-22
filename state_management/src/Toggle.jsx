import React from 'react'
import { useState } from 'react'

const Toggle = () => {
    const [state,setState]=useState(false)
    // let message;
    // if(state){
    //     message=<h1>Welcome to home page</h1>
    // }else{
    //     message=<h1>Please Login</h1>
    // }
    function toggle(){
        u=setState(!state)
    }
    // function toggle(){
    //     if(state){
    //         setState(false)
    //     }else{
    //         setState(true)
    //     }
    // }
  return (
    <>
    {/* <h1>{message}</h1> */}
    <h1>{state ? "Welcome" :"Please login"}</h1>
    {/* <button onClick={toggle}>Click</button> */}
    <button onClick={toggle}>{state ? "Logout" : "Login"}</button>

    </>
  )
}

export default Toggle

