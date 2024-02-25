import React from 'react'
import userContext from '../MiniContext/context/UserContext'

function Profile() {
    const { user } = React.useContext(userContext);
    return (
        <div>username :{user ? <p>{user.username}</p> : " "} </div>
    )
}

export default Profile