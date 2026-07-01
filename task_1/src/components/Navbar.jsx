import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
    <div className="navbar">
        <div className="left"><h2>LOGO</h2></div>
        <Link to="/phone" className='nav-link'><h2>Phone</h2></Link>
        <div className="right">
            <Link to="/" className='nav-link'><h2>Home</h2></Link>
            <Link to='/profile' className='nav-link'><h2>Profile</h2></Link>
            <h2>Settings</h2>
        </div>
    </div>
    </>
  )
}

export default Navbar