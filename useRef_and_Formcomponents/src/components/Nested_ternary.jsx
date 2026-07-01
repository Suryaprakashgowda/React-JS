import React,{useState} from 'react'

const Nested_ternary = () => {
    const [product,setProduct]=useState("")
    let items=["samsung s1","samsung f21","vivo s1","oppo reno 11","iphone 17","redmi k1","realme 10"]
    let result=items.filter((x)=>{return x.toLowerCase().startsWith(product.toLowerCase())}
    )
  return (
    <>
    <input type="text" value={product} onChange={(e)=>{setProduct(e.target.value)}} />
    {product=="" ? (<p>Search product </p>):(
        result.length>0 ? (<ol>{result.map((x)=>{return <li>{x}</li>})}</ol>) : (<p>No product</p>)
    )} 

    </>
  )
}

export default Nested_ternary