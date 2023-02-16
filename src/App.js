import React, { useState, useEffect } from 'react'
import './App.css';
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import UserMe from './Components/UserMe';
import GetUsersRoutines from './Components/UsersRoutine';
import GetActivities from './Components/GetActivities';
import LogOut from './Components/LogOut';
import GetRoutines from './Components/GetAllRoutines';
import { Route, BrowserRouter, Link, Routes } from 'react-router-dom';
import PostActivities from './Components/PostActivities';
import PostRoutines from './Components/PostRoutines';
import { STORAGE_KEY } from './Constants/constants';
// import ActIdRoutine from './Components/ActivityIdByRoutine';

const replyToken = 'test_token'


function App() {
  const [token, setToken] = useState(localStorage.getItem(`${STORAGE_KEY}`))





  return (

    <div className="App">
      <div>
        <ul className="links">
          <li><Link to='/signup'>SignUp</Link></li>
          <li><Link to='/login'>Login</Link></li>
          <li><Link to='/activities'>Activities</Link></li>
          <li><Link to='/routines'>Routines</Link></li>
          {(token) ? <li><Link to='/newactivity'>Create Activity</Link></li> : null}
          {(token) ? <li><Link to='/newroutine'>Create Routine</Link></li> : null}
          <li><Link to='/userme'>TestGetMe</Link></li>
          <li><Link to='/getusersroutines'>Test Get User Routines</Link></li>



        </ul>
        {(token) ? <LogOut /> : null}

      </div>
      <h1>Welcome to FitnessTracker</h1>
      <div className='test'>
        <Routes>
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<Login setToken={setToken} />} />
          <Route path='/activities' element={<GetActivities />} />
          <Route path='/routines' element={<GetRoutines />} />
          <Route path='/newactivity' element={<PostActivities />} />
          <Route path='/newroutine' element={<PostRoutines />} />
          <Route path='/userme' element={<UserMe />} />
          <Route path='/getusersroutines' element={<GetUsersRoutines />} />

        </Routes>





      </div>
    </div>

  );
}

export default App;
