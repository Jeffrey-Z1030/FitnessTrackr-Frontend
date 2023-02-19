import { useState, useEffect} from 'react';
import {LoginAccount} from '../API/AccountReq';
import { useNavigate } from 'react-router-dom';



function Login(){
    const [username,SetUsername] = useState('')
    const [password,SetPassword] = useState('')

    const setCredentials = async () => {
        await LoginAccount({ username, password });
        window.location.reload()
    }

    const setTargetValue = (cb) => {
        return (event) => {
          cb(event.target.value)
        }
      }

    const navigate = useNavigate();



    
      
      

    return(
        <div>
            <form onSubmit={
                    (event) => {
                        event.preventDefault();
                        setCredentials()
                        SetUsername('')
                        SetPassword('')
   
                
                    }}>
                <h3>Login</h3>
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

export default Login;