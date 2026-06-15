import React from 'react'

const Filter=()=>{
    const numbers=[10,20,30,40,50,60,70]
    let result=numbers.filter((x)=>{
        return x>30
    })
    return (<>
        <h1>Filter Example</h1>
        <ul>
        {result.map((x)=>{
            return <li>{x}</li>
        })}
        </ul>
        
    </>)
}

export default Filter