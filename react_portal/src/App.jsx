import React from 'react'
import PortalExample from './components/PortalExample'
import UserDefinedToast from './components/UserDefinedToast'
import InBuiltToast from './components/InBuiltToast'
const App=()=>{
    return (<>
    <h1>Welcome</h1>
    {/* <PortalExample/> */}
    <UserDefinedToast/>
    <br /><br/>
    <InBuiltToast/>
    </>
    )
}
export default App