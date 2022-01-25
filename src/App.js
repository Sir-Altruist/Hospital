import React from "react";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Department from "./pages/Department";
import Midwifery from "./pages/Midwifery";
import Contact from "./pages/Contact";
import Doctor from "./pages/Login/Doctor";
import Nurse from "./pages/Login/Nurse";
import Administrator from "./pages/Login/Administrator";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard/Dashboard";
import Layout from "./components/dashboard/Layout";
import Upload from "./pages/Dashboard/Upload";
import Result from "./pages/Dashboard/Result";
import Patient from "./pages/Login/Patient";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

function App() {
  const path = window.location.pathname.split("/")[1];
  let links =
    path !== "dashboard" ? (
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Landing />} />
          <Route path="/login/doctor" element={<Doctor />} />
          <Route path="/login/nurse" element={<Nurse />} />
          <Route path="/login/administrator" element={<Administrator />} />
          <Route path="/login/patient" element={<Patient />} />
          <Route path="/about" element={<About />} />
          <Route path="/midwifery" element={<Midwifery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/department" element={<Department />} />
        </Routes>
      </BrowserRouter>
    ) : (
      <BrowserRouter>
      <Layout>
          <Routes>
            <Route path="/dashboard" exact element={<Dashboard />} />
            <Route path="/dashboard/result" element={<Result />} />
            <Route path="/dashboard/upload" element={<Upload />} />
          </Routes>
      </Layout>
      </BrowserRouter>
    );

  return <>{links}</>;
}

AOS.init();

export default App;
