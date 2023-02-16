import { useState, useEffect } from 'react';
import { loginAccount } from '../API/UsersReq';
import { setTargetValue } from '../Constants/constants';



function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const setCredentials = async () => {
        await loginAccount({ username, password });
        // window.location.reload()
    }

    // const setTargetValue = (cb) => {
    //     return (event) => {
    //         cb(event.target.value)
    //     }
    // }



    return (
        <div>
            <form onSubmit={
                (event) => {
                    event.preventDefault();
                    setCredentials()
                    setUsername('')
                    setPassword('')
                }}>
                <h3>Login</h3>
                <input
                    placeholder='Enter Username'
                    onChange={setTargetValue(setUsername)}
                    value={username}
                />
                <input placeholder='Enter Password'
                    onChange={setTargetValue(setPassword)}
                    value={password}
                />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Login;