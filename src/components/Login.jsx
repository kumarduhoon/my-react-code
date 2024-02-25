import React from 'react'
import userContext from '../MiniContext/context/UserContext';

function Login() {
    const [username, setUsername] = React.useState("")
    const [password, setPassword] = React.useState("")

    const { setUser } = React.useContext(userContext)

    function clickHandler(e) {
        e.preventDefault();
        setUser({ username, password })
    }
    return (
        <div>
            <h2>Login</h2>
            <input type='text' value={username} placeholder='Entet the username'
                onChange={(e) => (setUsername(e.target.value))} />
            <br />
            <br />
            <input type='text' value={password} placeholder='Entet the password'
                onChange={(e) => (setPassword(e.target.value))} />
            <br />
            <br />
            <button type='submit' onClick={clickHandler}>submit</button>
            <br />
            <br />
        </div>
    )
}

export default Login