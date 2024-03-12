import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./screens/SignUp";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SignIn from "./screens/SignIn";
import "./index.css";
import Home from '../src/screens/Home';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={< SignIn/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
