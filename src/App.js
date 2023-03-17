import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Register from "./components/Register";
import { Passmail } from "./components/Passmail";
import Createcommunitypage from "./components/Createcommunityminipage";
import Createcommunityminipage from "./components/Createcommunityminipage";
import Signinsignup from "./components/Signinsignup";
import Joincommunity from "./components/Joincommunity";
import Dashboard from "./components/Dashboard";


export const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home />} />
          
        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/passmail" element={<Passmail />} />

        <Route path="/createcommunityminipage" element={<Createcommunityminipage />} />

        <Route path="/joincommunity" element={<Joincommunity />} />

        <Route path="/dashboard" element={<Dashboard />} />


      </Routes>

    </>
  )
  
}

export default App
