import React from 'react'
const Signup=(props)=>{
    function close(){
        props.setShowSignup(false)
    }
    return (
        <>
        <div className='overlay'>
            <div className='modal'>
                <h1>Signup page</h1>
                <input type="text" placeholder='Enter username' /><br />
                <input type="email" placeholder='Enter email' /><br />
                <input type="text" placeholder='Enter Mobile no.'/> <br/>
                <input type="text" placeholder='Enter password'/> <br/>
                <button className='btn'>Signup</button>
                <button onClick={close} className='btn'>Cancel</button>
            </div>
        </div>
       
        </>
    )
}
export default Signup;