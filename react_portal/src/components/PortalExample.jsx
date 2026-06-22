import React from 'react'
import ReactDOM from "react-dom"
const PortalExample = (props) => {
  return ReactDOM.createPortal(<div style={{position:"fixed",top:"10px",right:"20px",padding:"10px",borderRadius:"10px",backgroundColor:"red",color:"white"}}><h1>Login Success</h1>
  <h2> {props.a}</h2></div>,document.getElementById("portal"))
}

export default PortalExample