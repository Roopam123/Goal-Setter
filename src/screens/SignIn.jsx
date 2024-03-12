import React, { useState } from 'react';
import img from '../Assets/signin.png';
import styles from "../styles/signin.module.css";
import {toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks';


const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [btnLoading, setBtnLoading] = useState(false);
  const navigate = useNavigate();
  const auth = useAuth();

  const handleOnSubmit = async(e)=>{
    e.preventDefault();

    if(username === "" || password === ""){
      toast.error("username/password empty!")
      return;
    }
    setBtnLoading(true);

    try{
      const response = await auth.login(username, password);
      if(response.success){
        toast.success("Sign In Successfull!");
        setBtnLoading(false);
        setUsername("");
        setPassword("");
        navigate("/");
        setUsername("");
        setPassword("");
        return;
        
      }else{
        toast.error(response.message);
        setBtnLoading(false);
        setUsername("");
        setPassword("");
        return;
      }

      
      
    }catch(err){
      toast.error("Error while Signing In!")
      setBtnLoading(false);
      return;
    }


  }

 
  return (
    <div className={styles.signin}>
      {/* Left */}
      <div className={styles.singin_left}>
        <img src={img} alt="" />
      </div>
      {/* Right */}
      <div className={styles.signin_right}>
        <form>
          <div className="form-item-signin" id="signin-form">
            <div className={styles.form_content} id="form-input">
              <span>Username</span>
              <input type="text" value={username} placeholder='Enter your your name' onChange={(e)=> setUsername(e.target.value)} />
            </div>
            <div className={styles.form_content}>
              <span>Password</span>
              <input type="password" value={password} placeholder='Enter your password' onChange={(e)=> setPassword(e.target.value)} />
            </div>
          </div>
          {btnLoading ? 
            <button disabled className={styles.btn_disabled}>
            Signing In...
          </button>
         :
          <button onClick={handleOnSubmit} className={styles.btn}>
            Sign In
          </button>
          
          }
        </form>
      </div>
    </div>
  )
}

export default SignIn;
