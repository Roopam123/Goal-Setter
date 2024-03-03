import React, { useState } from 'react';
import Button from '../../components/Button/Button';
import img from '../../Assets/signin.png';
import './SignIn.css';
import { toast } from 'react-toastify';
import {login} from '../../api';
import {useNavigate} from 'react-router-dom'

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isSignIn,setIsSignIn] = useState(false);

  const navigate = useNavigate();

  const handelSignIn = async (e) => {
    e.preventDefault()
    if (username === "" && password === "") {
      return toast.error("please fill username and password", {
        position: "top-center"
      })
    }
    // login
    console.log("username",username,"password",password);
    try {
      const response = await login(username,password);
      if (response.success) {
        toast.success("Successfully logged in. Welcome aboard!",{
          position:"top-center"
        });
        setIsSignIn(true)
        navigate("/");
      }
    } catch (error) {
      console.log("Sinup form error",error);
    }
  }
  return (
    <div className='signup' id="signin">
      {/* Left */}
      <div className="singup-left">
        <img src={img} alt="" />
      </div>
      {/* Right */}
      <div className="signup-right">
        <form>
          <div className="form-item-signin" id="signin-form">
            <div className="form-content" id="form-input">
              <span>Username</span>
              <input type="text" placeholder='Enter your your name' onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="form-content">
              <span>Password</span>
              <input type="password" placeholder='Enter your password' onChange={(e) => setPassword(e.target.value)} />
            </div>
          </div>
          <button className='button' disabled ={isSignIn?true:false} onClick={handelSignIn}><Button title="Sign In" /></button>
        </form>
      </div>
    </div>
  )
}

export default SignIn;
