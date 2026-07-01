import React,{useRef,useState} from 'react'
import Nested_ternary from './components/Nested_ternary'
const App = () => {
  let inputRef=useRef(null)
  function change(){
    inputRef.current.textContent="Welcome"
    inputRef.current.style.color="red"
  }
  
  const [state,setState]=useState("")
  const [email,setEmail]=useState("")
  function emailFun(e){
    setEmail(e.target.value)
    console.log(e.target.value)
  }
  
  return (
    <>
    <h1 ref={inputRef}>Surya</h1>
    <button onClick={change}>Click</button>
    <br /><hr />
    <h1>Name:-{state}</h1>
    <input type="text" value={state} onChange={(e)=>{setState(e.target.value)}} />
    <h2>Email:-{email}</h2>
    <input type="text" value={email} onChange={emailFun} />

    <hr/>
    <Nested_ternary/>
    </>
  )
}

export default App