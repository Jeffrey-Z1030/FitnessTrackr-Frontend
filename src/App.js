import React, { useState, useEffect } from 'react'
import './App.css';
// import styles from './App.module.css'
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
import RoutinePageById from './Components/RoutinesByIdPage';
import AddActivityToRoutine from './Components/ActToRoutine';
import DropDown from './Components/DropDown';

const replyToken = 'test_token'


function App() {
  const [token, setToken] = useState(localStorage.getItem('replyToken'))


  useEffect(() => {

  }, [token])





  return (
    <>
      <div className="App">


        <div>

          <ul className="links">
            {(!token) ? <li><Link to='/signup'>SignUp</Link></li> : null}
            {(!token) ? <li><Link to='/login'>Login</Link></li> : null}
            <li><Link to='/getactivities'>Activities</Link></li>
            <li><Link to='/getroutines'>Routines</Link></li>
            {(token) ? <li><Link to='/postactivitie'>Create Activity</Link></li> : null}
            {(token) ? <li><Link to='/postroutines'>Create Routine</Link></li> : null}
            {(token) ? <li><Link to='/userme'>TestGetMe</Link></li> : null}
            {(token) ? <li><Link to='/getusersroutines'>Test Get User Routines</Link></li> : null}
            {(token) ? <LogOut /> : null}
          </ul>

        </div>


        <h1>Welcome to FitnessTracker</h1>
        <div className='test'>
          <Routes>
            <Route path='/signup' element={<SignUp />} />
            <Route path='/login' element={<Login setToken={setToken} />} />
            <Route path='/getactivities' element={<GetActivities />} />
            <Route path='/getroutines' element={<GetRoutines />} />
            <Route path='/postactivitie' element={<PostActivitie />} />
            <Route path='/postroutines' element={<PostRoutines />} />
            <Route path='/userme' element={<UserMe />} />
            <Route path='/getusersroutines' element={<GetUsersRoutines />} />
            <Route path='/routinepagebyactid' element={<RoutinePageById />} />
            <Route path='/addActPage' element={<AddActivityToRoutine />} />
          </Routes>





        </div>
      </div>

    </>

  );
}

export default App;
