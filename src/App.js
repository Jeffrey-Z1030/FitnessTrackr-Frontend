import React, {useState,useEffect} from 'react'
import './App.css';
import SignUp from './Components/signup';
import Login from './Components/login';
import UserMe from './Components/UserMe';
import GetUsersRoutines from './Components/UsersRoutine';
import GetActivities from './Components/getActivities';
import LogOut from './Components/LogOut';
import GetRoutines from './Components/getAllRoutines';
import { Route, BrowserRouter, Link, Routes } from 'react-router-dom';
import PostActivitie from './Components/postActivities';
import PostRoutines from './Components/postRoutines';


const replyToken ='test_token'


function App() {
  const [token,setToken] = useState(localStorage.getItem('replyToken'))


  

  return (
    
      <div className="App">
        <div>
          <ul className="links">
          <li><Link to='/signup'>SignUp</Link></li>
          <li><Link to='/login'>Login</Link></li>
          <li><Link to='/getactivities'>Activities</Link></li>
          <li><Link to='/getroutines'>Routines</Link></li>
          <li><Link to='/postactivitie'>Create Activity</Link></li>
          <li><Link to='/postroutines'>Create Routine</Link></li>
          <li><Link to='/userme'>TestGetMe</Link></li>
          <li><Link to='/getusersroutines'>Test Get User Routines</Link></li>


    
          </ul>
          {(token) ?<LogOut/> :null}
          
        </div>
        <h1>Welcome to FitnessTracker</h1>
        <div className='test'>
          <Routes>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/login' element={<Login setToken={setToken}/>}/>
          <Route path='/getactivities' element={<GetActivities/>}/>
          <Route path='/getroutines' element={<GetRoutines/>}/>
          <Route path='/postactivitie' element={<PostActivitie/>}/>
          <Route path='/postroutines' element={<PostRoutines/>}/>
          <Route path='/userme' element={<UserMe/>}/>
          <Route path='/getusersroutines' element={<GetUsersRoutines/>}/>

          </Routes>
 
     

          </div> 
      </div>
    
  );
}

export default App;
