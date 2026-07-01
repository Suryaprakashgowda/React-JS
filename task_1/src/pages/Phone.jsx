import React from 'react'
import { useState } from 'react'
import PhoneNavbar from '../components/PhoneNavbar'
const Phone = () => {
    const [value, setValue] = useState(0)
    function handleIncrement() {
        setValue(value + 1)
    }
    function handleDecrement() {
        if (value > 0) {
            setValue(value - 1)
        }
    }
  return (
    <>
    <PhoneNavbar val={value}/>
    <div className="card">
        <div className='Phone'>
            <img src="https://www.whatmobile.com.pk/admin/images/Oppo/Reno%2011/Oppo-Reno-11-Image-2.jpg"  object-fit="cover" alt="" />
            <span><b>Name:-</b>Oppo Reno 11</span>
            <span><b>Price:-</b>35,000</span>
            <div className='counter'>
            <button onClick={handleDecrement}><b>-</b></button><b>{value}</b><button onClick={handleIncrement}><b>+</b></button>
            </div>
        </div>
        <div className='Cart-card'>
            <span><b>Name:-</b>Oppo Reno 11</span>
            <span><b>Price:-</b>35,000</span>
            <br />
            <b>Specifications:-</b>
            <ul>
                <li>12GB RAM | 256GB Storage</li>
                <li>6.7-inch Display</li>
                <li>50MP Main Camera</li>
                <li>5000mAh Battery</li>
            </ul>
            
            <div className="Quantity">
            <div className="row">
                    <b>Quantity :</b>
                    <b>{value} × 35000</b>
            </div>
                <div>
                    <b>Total :</b>
                    <b>₹ {value * 35000}</b>
                </div>
            <button className="btn">Buy</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Phone