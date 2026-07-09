import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <>
    <div className="parentNav">
        <div className="left">
            <h1>Logo</h1>
        </div>
        <div className="right">
            <Link to="/" className="nav-link"><h1>Home</h1></Link>
            <Link to="/add-student" className="nav-link"><h1>Add</h1></Link>
            <Link to="/view-students" className="nav-link"><h1>View</h1></Link>
        </div>
    </div>
    </>
  )
}

export default Navbar