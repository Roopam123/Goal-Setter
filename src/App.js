import React from 'react';
import AppRouter from './navigation/AppRouter';
import {ToastContainer } from "react-toastify";
import { AppContext } from './context/ContextApi';


const App = () => {
  return (
    <AppContext>
      <AppRouter/>
      <ToastContainer 
        position="top-center" 
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        style={{ fontSize: "14px", zIndex: 1000 }}
      />
    </AppContext>
  )
}

export default App
