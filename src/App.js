import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./screens/SignUp";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SignIn from "./screens/SignIn";
import Goal from "./screens/Goals";
import "./index.css";
import Home from '../src/screens/Home';
import { useAuth } from "./hooks";
import Loader from "./components/Loader";

function App() {
  const auth = useAuth();
  let loading = auth.loading;

  return (
   <>
     {loading? <Loader/> : 
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/goal" element={<Goal/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  }
   </>

  );
}

export default App;
