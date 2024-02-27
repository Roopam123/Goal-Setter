import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Pages/SignUp/SignUp";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
// import Home from "./Pages/Home/Home";
import SignIn from "./Pages/SignIn/SignIn";
import "./index.css";
import NewHome from '../src/Pages/NewHome/NewHome'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<NewHome />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={< SignIn/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
