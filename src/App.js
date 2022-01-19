import React from 'react'
import Landing from './pages/Landing'
import Locations from './pages/Locations'
import Department from './pages/Department'
import Midwifery from './pages/Midwifery'
import Contact from './pages/Contact'
import Login from './pages/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard/Dashboard';
import Layout from './components/dashboard/Layout';
import Settings from './pages/Dashboard/Settings';




function App() {

  const path = window.location.pathname.split('/')[1]
  let links = path !== 'dashboard' ?
  <BrowserRouter>
  <Routes>
        <Route path='/' exact element={<Landing />} />
        <Route path='/login' element={<Login />} />
        <Route path='/locations' element={<Locations />} />
        <Route path='/midwifery' element={<Midwifery />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/department' element={<Department />} />
      </Routes>
      </BrowserRouter> 
      : <Layout>
          <BrowserRouter>
          <Routes>
          <Route path='/dashboard' exact element={<Dashboard />} />
          <Route path='/dashboard/settings' element={<Settings />} />
              </Routes>
          </BrowserRouter>
        </Layout> 

      return (
        <>
        {links}
        </>
      )
}

export default App;
