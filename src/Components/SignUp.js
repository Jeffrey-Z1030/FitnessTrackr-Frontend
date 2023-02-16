import { useState, useEffect } from 'react';
import { createAccount } from '../API/UsersReq';
import { setTargetValue } from '../Constants/constants';



function SignUp() {
    const [username, SetUsername] = useState('')
    const [password, SetPassword] = useState('')

    const setCredentials = async () => {
        await createAccount({ username, password });
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
                    SetUsername('')
                    SetPassword('')
                }}>
                <h3>SIGNUP</h3>
                <input
                    placeholder='Enter Username'
                    onChange={setTargetValue(SetUsername)}
                    value={username}
                />
                <input placeholder='Enter Password'
                    onChange={setTargetValue(SetPassword)}
                    value={password}
                />
                <button>Submit</button>
            </form>
        </div>
    )
}


export default SignUp;