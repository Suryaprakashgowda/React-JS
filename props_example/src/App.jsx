import React from 'react'
import UserData from './pages/UserData'
const App=()=>{
  let username="Surya"
  let age=21
  let skills=["Html","css","js"]
  let college="Gec"
  let address={
    city:"Bengaluru"
  }

function greet(){
  return "Welcome"
}

  return (
    <>
    <UserData a={username}
    age={age} 
    skills={skills.join(" ")}
    college={college}
    address={address}
    greet={greet} />
    </>
  )
}

export default App