import React from 'react'
import Parent from './Parent'
import {Data} from '../context/Data'
import {useContext} from 'react'
const Grandparent = () => {
  const username = useContext(Data)
  return (
    <>
    <h1>Grandparent.. {username}</h1>
      <Parent/>
    </>

  )
}

export default Grandparent