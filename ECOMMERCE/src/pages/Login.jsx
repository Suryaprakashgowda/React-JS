import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate=useNavigate()


//   useEffect() can only be used at the top level of a React component, not inside another function like login().

  function login(e) {
    e.preventDefault()
    axios
    .get("http://localhost:3000/users")
    .then((res) => {

    
      let users = res.data
      let result=users.find((x) => x.email === email && x.password === password);
      if (result) {
        toast.success("Login Successful");
        localStorage.setItem("userId",result.id)
        localStorage.setItem("isLoggedIn",true)
        localStorage.setItem("username",result.user)
        navigate("/dashboard")
      } else {
        toast.error("Invalid Email or Password");
      }
    })
    .catch((err) => console.log(err));
}


  return (
    <>
      <center>
        <h1>Login page</h1>
      </center>
      <div className="form1">
        <form onSubmit={login}>
          <input type="text" placeholder="Enter Username" value={email} onChange={(e)=>{setEmail(e.target.value)}} required />
          <br />
          <input type="password" placeholder=" Enter Password" value={password} onChange={(e)=>{setPassword(e.target.value)}} required />
          <br />
          <button id="login">Login</button>
          <p>
            New user? <Link to={"/signup"}>Signup here</Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
