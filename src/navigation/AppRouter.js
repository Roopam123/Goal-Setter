import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewHome from "../Pages/NewHome/NewHome";
import Navbar from "../components/Navbar/Navbar";
import SignIn from "../Pages/SignIn/SignIn";
import Signup from "../Pages/SignUp/SignUp";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<NewHome/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
