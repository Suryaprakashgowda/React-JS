import React from 'react'
import Parent from './Parent'
const Grandparent = (props) => {
  return (
    <>
    <h1>Grandparent</h1>
      <Parent a={props.a} />
    </>

  )
}

export default Grandparent