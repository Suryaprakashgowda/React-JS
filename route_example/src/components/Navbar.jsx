import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="left"><img src="https://static.vecteezy.com/system/resources/thumbnails/026/679/334/small_2x/browser-3d-icon-illustration-object-user-interface-3d-rendering-png.png" alt="" /></div>
        <div className="right">
            <Link to="/" className="nav-link"><h2>Homepage</h2></Link>
            <Link to="/signup" className="nav-link"><h2>Signup</h2></Link>
            <Link to="/login" className="nav-link"><h2>Login</h2></Link>
            {/* <a href="signup">Signup</a> reloads html page and react router dom is not used. so use Link tag instead of a tag */}
        </div>
    </div>
  )
}

export default Navbar