// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserLayout from './User/Userlayout';
import Home from './User/Pages/Home/Home';
// import UserLayout from './UserLayout';
import UserLayout from './User/Userlayout';
import Home from './User/Pages/Home';
import Auth from './User/Pages/Auth'


const App = () => {
  return (
    <Router>
      
        <Routes>
          <Route path='/' element={<UserLayout/>} />
         <Route index element={<Home/>} />
         {/* <Route path="*" element={<Error />} />*/
        //  <Route path="login" element={<Auth />} />
         /*
         <Route path="community" element={<CommunityPage />} />
         <Route path="profile" element={<Profile />} />
         <Route path="help" element={<FAQ/>} />
         <Route path="tutor" element={<Tutorial/>} />
         <Route path="chatbot" element={<Chatbot />} /> */}
         <Route/>
     

         {/* <Route path='/' element={<UserLayout/>} />
        
        
          <Route/>
          */}
         </Routes>
      
    
    </Router>
  );
};

export default App;