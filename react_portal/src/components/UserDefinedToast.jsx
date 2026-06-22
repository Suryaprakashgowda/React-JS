import React,{useState} from 'react'
import PortalExample from './PortalExample'

const UserDefinedToast = () => {
    const [Toast,setToast]=useState("")
    function ChangeData(){
        setToast("Dashboard Login Successfull ")
        setTimeout(() => {
            setToast("")
        }, 2000);
    }
  return (
    <>
    <button onClick={ChangeData}>Login</button>
    {Toast && <PortalExample a={Toast}/>}
    </>
  )
}

export default UserDefinedToast