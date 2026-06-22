import { useState } from "react"

const PasswordHide = () => {
    const [show,setShow]=useState(false)
    function toggle(){
        setShow(!show)
    }
  return (
    
    <>
    <h1>Password hide</h1>
    <input type={show ? "text":"password"} />
    <button onClick={toggle}>{show ? "Hide":"Show"}</button>
    
    </>
  )
}

export default PasswordHide