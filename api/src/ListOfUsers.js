import React from 'react'




const ListOfUsers = ({user}) => {
    return(
        <div>
        <div className="card">
        <div className='cardtitle'> Name:{user.name} <br/>
        UserName:{user.username} </div>
        <div className='cardbody'>
        <div className='email'/><h2> Email: {user.email} </h2></div>
        <div className='adress'>
        <p> Street:{user.address.street}</p>
        <p> Suite:{user.address.Suite}</p>
        <p> City:{user.address.City}</p>
        <p> ZipCode:{user.address.ZipCode}</p>
        <h3> Geo-Lat</h3>
        <h3> Geo-Lng</h3>
        </div>
        <div className='card_footer'>
        <div className='="info"'>
        <h4>Phone:</h4>
        <h4>Website:</h4>
        <h5>Company: {user.company.name} </h5>
        <h5>CatchPhrase:</h5>
        <h5> Bs:</h5>
        </div>
        </div>
        </div>
        </div>
        
    )
}

export default ListOfUsers;