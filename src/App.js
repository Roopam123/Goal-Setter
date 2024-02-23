import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Signup from "./Pages/SignUp/SignUp";
import Navbar from "./components/Navbar/Navbar";
import Footer from './components/Footer/Footer';
import Home from "./Pages/Home/Home";
import "./index.css"

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home/>}/>
      <Route path="/signup" element={<Signup/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
