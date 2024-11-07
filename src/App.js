import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp'
import Forgot from './pages/Forgot';
import Home from './pages/Home'


const App = () => {
    return (
     <Router>
                  <div>
                      <Routes>
                          <Route path="/login" element={<LogIn />} />
                          <Route path="/signUp" element={<SignUp/>}/>
                          <Route path="/forgot" element={<Forgot/>}/>
                          <Route path="/Home"  element={<Home/>}/>  
                      </Routes>
                  </div>
              </Router>
          );
      };
    export default App;