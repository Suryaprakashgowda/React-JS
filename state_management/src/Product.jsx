import React,{useState} from 'react'

const Product = () => {
    const [state,setState]=useState(false)
    function toggle(){
        setState(!state)
    }
  return (
    <>
    <img src="https://www.oppo.com/content/dam/oppo/common/mkt/v2-2/reno11-5g-en/specs/reno11-860-720.png" height={"300px"} alt="" />
    <h1>OPPO Reno 11 5G</h1>
    <p><b>Price:</b> 35000-/-</p>
    <p><b>Ratting:-</b>⭐⭐⭐⭐</p>
    <button onClick={toggle}>{state ? "show Less" : "show More"}</button>

    {state && <div>
      <h2>Specifications</h2>
      <p> <b>Display:</b> 6.7 inches</p>
      <p> <b>Processor:</b> Snapdragon 8 Gen 2</p>
      <p> <b>RAM:</b> 12 GB</p>
      <p> <b>Storage:</b> 256 GB</p>
      </div>}
    </>
  )
}

export default Product