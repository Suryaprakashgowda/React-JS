import React from 'react'

const LogicalOR = () => {
    const user = [
        {
            id: 1,
            name: "John",
            image: "https://wallpapercave.com/wp/wp2318909.png"
        },
        {
        id: 2,
            name: "Jane",
            image: "https://thumbs.dreamstime.com/b/tom-jerry-classic-cartoon-chase-relive-classic-cartoon-rivalry-image-tom-jerry-iconic-cat-mouse-376717377.jpg" 
        },
        {
            id: 3,
            name: "Bob",
            image: null,
        }
    ];

    return (<>
            <h2>User Profiles</h2>
            <div  className="userProfiles">
                {user.map((x)=>{
                    return (
                        <div className="card" key={x.id}>
                            <h2>{x.id}</h2>
                            <h2>{x.name}</h2>
                            <img src={x.image || "https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-18273.jpg"} height={"200px"} width={"200px"} alt={x.name} />
                        </div>
                    )
                })}
                </div></>
    );
}
export default LogicalOR