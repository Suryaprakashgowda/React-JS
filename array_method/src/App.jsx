import React from 'react'
import Cartoon from './Cartoon.jsx'
import Reduce from './Reduce.jsx'
import Filter from './Filter.jsx'

const App = () => {
  const colors=["red","green","blue","yellow","orange"]
  for(let i of colors){
    console.log(i)
  }
  return (
    <>
      <h1>Map colors</h1>
      {/* {colors.map((x)=>{
        return <h2>{x}</h2>
      })} */}
      <ol>
        {/* {colors.map((color,index)=>(
          <li key={index}>{color}</li>
        ))} */}
        {colors.map((x)=>{
          return <li>{x}</li>
        })}
      </ol>
      <Cartoon />
      <Reduce />
      <Filter />
    </>
  )
}

export default App

rafce