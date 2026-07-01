import React from 'react'
import Grandparent from './pages/Grandparent'
const App = () => {
  let username="Surya"
  return (
    <>
    <h1>Welcome, {username}!</h1>
    <Grandparent a={username} />
    </>
  )
}

export default App