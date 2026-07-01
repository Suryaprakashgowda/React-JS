import React from 'react'
import Child from './Child'
const Parent = (props) => {
  return (
    <>
      <h2>Parent</h2>
      <Child a={props.a} />
    </>
  )
}

export default Parent