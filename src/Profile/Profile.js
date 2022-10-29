import React from 'react'

const Profile = ({fullName,Bio,profession,children}) => {
    console.log(children);
  return (
    
    <div>
        <h1>{fullName}</h1>
        <p>{Bio}</p>
        <h1>{profession}</h1>
        <img src={children} alt={fullName} />
    </div>
  )
}

export default Profile