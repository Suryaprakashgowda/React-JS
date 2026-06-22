import React from 'react'
import { useState } from 'react'
import CountExample from './CountExample'
import Toggle from './Toggle'
import PasswordHide from './PasswordHide'
import Product from './Product'

const App = () => {
  const [state,setState]=useState("Surya")
  function change(){
    setState("Gowda")
  }
  return (
    <>
    <Product/>
    <PasswordHide/>
    <Toggle/>
    <CountExample/>
    <h1>{state}</h1>
    <button onClick={change}>Change</button>
    </>
  )
}

export default App