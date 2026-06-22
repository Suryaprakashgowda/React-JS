import React,{useState} from 'react';
import Signup from './pages/Signup.jsx';
import Login from './pages/Login.jsx';
const App=()=>{
    const [showSignup,setShowSignup]=useState(false)
    function open(){
        setShowSignup(true)
    }
    const [showLogin,setShowLogin]=useState(false)
    function loginOpen(){
        setShowLogin(true)
    }
    return (
        <>
        <h1>Welcome to our website</h1><br />
       <button onClick={open}>Signup</button>
       <button onClick={loginOpen}>Login</button>

        {showLogin && <Login setShowLogin={setShowLogin}/>}
       {showSignup && <Signup setShowSignup={setShowSignup}/>}
        </>
    )
}
export default App;