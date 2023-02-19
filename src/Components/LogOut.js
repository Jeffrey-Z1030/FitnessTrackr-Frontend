import {useState} from 'react';

function LogOut(){

    const [token,setToken] = useState(localStorage.getItem('replyToken'))

    return(
      <button onClick={
        () => {
          localStorage.clear('TOKEN_STORAGE_KEY')
          setToken('');
          alert('You have been logged off')
          window.location.reload()
        }
      }>Log Out</button>
    )
  }

  export default LogOut;