import React from 'react'
import {useContext} from 'react'
import {Data} from '../context/Data'
const Child = () => {
  const username = useContext(Data)
  return (
    <>
      <h3>Child... {username}</h3>
    </>
  )
}

export default Child