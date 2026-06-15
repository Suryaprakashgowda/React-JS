import React from 'react'

const Cartoon = () => {
    let images=["https://www.w3schools.com/w3images/fjords.jpg",
        "https://www.w3schools.com/w3images/lights.jpg",
        "https://www.w3schools.com/w3images/mountains.jpg"]
  return (
    <>
        <h1>Map images</h1>
        {images.map((image) => (
            <img src={image} height={"200" }/>
        ))}
    </>
  )
}

export default Cartoon