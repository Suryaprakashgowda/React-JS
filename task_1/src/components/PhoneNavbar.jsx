import React from 'react'

const PhoneNavbar = (props) => {
  return (
    <>
    <div className="navbar-phone">
        <div className="left-phone"><h2>OPPO</h2></div>
        <div className="right-phone">
            <h2>Home</h2>
            <img src="https://tse3.mm.bing.net/th/id/OIP.5G40GHwD9wPG985VLqdrYwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" height="30" width="40"  alt="" />
            <h2>:</h2>
        </div>
    </div>
    <div className='cart-value'>{props.val}</div>
    </>
  )
}

export default PhoneNavbar