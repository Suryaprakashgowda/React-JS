import React from 'react'

const Reduce = () => {
    let num=[1,2,3,4,5]
    let result=num.reduce((accumulator,currentValue)=>{
        return accumulator+currentValue
    },0)
  return (
    <>
        <h1>Reduce Example</h1>
        <h3>Result: {result}</h3>
    </>
  )
}

export default Reduce