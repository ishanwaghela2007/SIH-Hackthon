// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserLayout from './User/Userlayout';
import Landing from './User/Pages/Landingpage/Landing';
import Home from './User/Pages/Home/Home';
import Signup from './User/Pages/SignUp/SignUp'
import Login from './User/Pages/Login/Login';
import ContactUs from './User/Pages/Contact/contact';
import Error from './User/Pages/Error/404'
import Dashboard from './Admin/Pages/Dashboard/Dashboard';
import Adminlayout from './Admin/Adminlayout';
import AdminLand from './Admin/Pages/AdminLand/AdminLanding'
import AdminLogin from './Admin/Pages/login/AdminLogin';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<UserLayout />}>
          <Route index element={<Landing />} />
          <Route path='home' element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='Signup' element={<Signup/>}/>
          <Route path='Contact' element={<ContactUs/>}/>
          <Route path='*' element={<Error/>}/>
        </Route>
        <Route path='/admin' element={<Adminlayout/>}>
        <Route index element={<AdminLand/>}/>
        <Route path='Dashboard' element={<Dashboard/>}/>        \
        <Route path='adminlogin' element={<AdminLogin/>}/>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
