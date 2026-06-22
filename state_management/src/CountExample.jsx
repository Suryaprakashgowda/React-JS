import React from "react";
import {useState} from 'react'

const CountExample=()=>{
    const [count,setCount]=useState(0)
    function inc(){
        setCount(count+1)
    }
    function dec(){
        if(count>0){
        setCount(count-1)
        }
    }
    function reset(){
        setCount(0)
    }
    return (
        <>
        <h1>{count}</h1>
        <button onClick={inc} style={{gap:'20px'}}>Increment </button>
        <button onClick={dec} style={{gap:'20px'}}>Decrement</button>
        <button onClick={reset} style={{gap:'20px'}}>Reset</button>
        </>
    )
}
export default CountExample