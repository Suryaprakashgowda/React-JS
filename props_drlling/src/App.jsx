import React from 'react'
import Grandparent from './pages/Grandparent'
import {Data} from './context/Data'
const App = () => {
  let username="Surya"
  return (
    <>
    <Data.Provider value={username}>
      <h1>Welcome, {username}!</h1>
      <Grandparent />
    </Data.Provider>
    </>
  )
}

export default App