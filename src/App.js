
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Starts from './Pages/After_signin/Starts';
import Courses from './Pages/After_signin/Courses';
import Home from './Pages/After_signin/Home';
import Inbox from './After_signin_components/HomePage-components/Navbar/Me/Inbox';
import Profile from './After_signin_components/HomePage-components/Navbar/Me/Profile';
import Account from './After_signin_components/HomePage-components/Navbar/Me/Account';
import Signout from './After_signin_components/HomePage-components/Navbar/Me/Signout';
import Video_Display from './Pages/After_signin/Video_Display';
import Discuss from './After_signin_components/Video_DisplayPage_components/Video_path_components/Navbar/Discuss';
import Learner from './After_signin_components/Video_DisplayPage_components/Video_path_components/Navbar/Learner';
import Path from './After_signin_components/Video_DisplayPage_components/Video_path_components/Navbar/Path';
import Before_signin_Home from './Pages/Before_signin/Before_signin_Home';
import Before_signin_Courses from './Pages/Before_signin/Before_signin_Courses';
import Before_signin_Contact_Us from './Pages/Before_signin/Before_signin_Contact_Us';
import Before_signin_About_Us from './Pages/Before_signin/Before_signin_About_Us';
import Video_display from './After_signin_components/Video_DisplayPage_components/Video_display_component/Video_display';
import video1 from './Assets/Videos/Introduction.m4v'
import {createContext} from 'react'
export const Data=createContext();
function App() {
  const arrayVideo=[video1]
  return (

    <>
    <Data.Provider value={arrayVideo}>
      <Router>
        <Routes>
          {/* Before signin routes */}
          <Route path='/' element={<Before_signin_Home />} />
          <Route path='/before_signin_courses' element={<Before_signin_Courses />} />
          <Route path='/before_signin_contact_us' element={<Before_signin_Contact_Us />} />
          <Route path='/before_signin_about_us' element={<Before_signin_About_Us />} />



          {/* After signin routes */}
          <Route path='/home' element={<Home />} />
          <Route path='/starts' element={<Starts />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/inbox' element={<Inbox />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/account' element={<Account />} />
          <Route path='/signout' element={<Signout />} />
          <Route path='/video_display' element={<Video_Display />} />
          <Route path='/path' element={<Path />} />
          <Route path='/learner' element={<Learner />} />
          <Route path='/discuss' element={<Discuss />} />
          {/* <Route path='/video' element={<Video_display/>} /> */}

        </Routes>
      </Router>
      </Data.Provider>

    </>
  );
}

export default App