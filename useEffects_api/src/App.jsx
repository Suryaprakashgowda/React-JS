import React, { useEffect, useState } from "react";

const App = () => {
  const [user, setUser] = useState([])
  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((x) => x.json())
      .then((y) => setUser(y))
      .catch((err) => console.log(err))
  }, [])
  return (
    <>
      <center><h1>Users</h1></center>
      <div className="cardContainer">
        {user.map((x)=>{
        return <div className="userCard" key={x.id}>
          <h1>{x.id}</h1>
          <h2>{x.login}</h2>
          <img src={x.avatar_url} height={"200px"} alt="" />
        </div>
      })}
      </div>
      
    </>
  )
}

export default App;
