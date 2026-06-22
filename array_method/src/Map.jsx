import React from 'react'

const Map = () => {
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
    </>
  )
}

export default Map

