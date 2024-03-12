import React, { useEffect, useState } from 'react';
import styles from "../styles/signup.module.css";
import img from '../Assets/signup.svg';
import { register, checkUsername } from '../api';
import {toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [username, setUsername] = useState("");
  const [qualification, setQualification] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [address, setAddress] = useState("");
  const [usernameExists, setUsernameExists] = useState(false);
  const [btnLoading, setBtnLoading] = useState(false);
  const navigate = useNavigate();
  
  useEffect(()=>{
    handleUsernameChange()
  }, [username]);




  const handelOnSubmit = async (e) => {
    e.preventDefault();

        // check for all required feilds
        if(firstName === "" || lastName === "" || mobileNo === "" || username === "" || qualification === "" || password == "" || confirmPassword == ""){
          toast.error("Please fill all required feilds!");
          return;
        }

    // check for password and cpassword value
    if (password !== confirmPassword) {
      toast.error("password and cpassword are not same!")
      return;
    }
    setBtnLoading(true);

    const data = {
      fName: firstName,
      lName: lastName,
      mobile: mobileNo,
      username: username,
      qualification: qualification,
      password: password,
      cpassword: confirmPassword,
      address: address
    }


    try {
       const response = await register(data);
       if(response.success === true){
          toast.success(`Hey ${response.data.fName}! You are registered Successfully!`);

          setFirstName("");
          setLastName("");
          setMobileNo("");
          setUsername("");
          setQualification("");
          setPassword("");
          setConfirmPassword("");

          navigate("/signin");
          setBtnLoading(false);
          return;
         

       }else{
         toast.warn(response.message);
         setBtnLoading(false);
         return;
       }
    } catch (err) {
      console.log("SignUp Error");
      toast.error("Error occurred during registration");
      setFirstName("");
      setLastName("");
      setMobileNo("");
      setUsername("");
      setQualification("");
      setPassword("");
      setConfirmPassword("");
      setBtnLoading(false);
      return;
    }
  }

  const handleUsernameChange = async(e)=>{
      try{
         // check username available
         let isAvailale = await checkUsername(username);
         isAvailale = isAvailale.data.exists;

         setUsernameExists(isAvailale);

      }catch(err){
        console.log(err);
      }
  }

  return (
    <div className={styles.signup}>
      {/* Left */}
      <div className={styles.singup_left}>
        <img src={img} alt="" />
      </div>
      {/* Right */}
      <div className={styles.signup_right}>
        <form>
          <div className={styles.form_item}>
            <div className={styles.form_content}>
              <span>First Name*</span>
              <input type="text" 
                     placeholder='Enter your first name' 
                     value={firstName}
                     onChange={(e) => setFirstName(e.target.value)} />
            </div>
            <div className={styles.form_content}>
              <span>Last Name*</span>
              <input type="text" 
                     placeholder='Enter your last name' 
                     value={lastName}
                     onChange={(e)=> setLastName(e.target.value)} />
            </div>
          </div>
          <div className={styles.form_item}>
            <div className={styles.form_content}>
              <span>Mobile No.*</span>
              <input type="text" 
                     placeholder='Enter your Mobile No.' 
                     value={mobileNo}
                     onChange={(e) => setMobileNo(e.target.value)} />
            </div>
            <div className={styles.form_content}>
              <span>Qualification*</span>
              <input type="text" 
                     placeholder='First Name'
                     value={qualification} 
                     onChange={(e) => setQualification(e.target.value)} />
            </div>
          </div>
          <div className={styles.form_item}>
            <div className={styles.form_content}>
              <span>Username*</span>
              <input type="text"
                     placeholder='Enter your username'
                     value={username}
                     onChange={(e)=> setUsername(e.target.value)}
                     />
                {usernameExists && <small className={styles.small_error}>username taken</small>}
            </div>
            <div className={styles.form_content}>
              <span>Password*</span>
              <input type="password" 
                     placeholder='Enter your password' 
                     value={password}
                     onChange={(e) => setPassword(e.target.value)} />
            </div>
          </div>
          <div className={styles.form_item}>
            <div className={styles.form_content}>
              <span>Confirm Password*</span>
              <input type="password"
                     placeholder='Confirm Password'
                     value={confirmPassword}
                     onChange={(e) => setConfirmPassword(e.target.value)}
                     />
            </div>
            <div className={styles.form_content}>
              <span>Address</span>
              <input type="text" 
                     placeholder='Enter your Address' 
                     value={address}
                     onChange={(e) => setAddress(e.target.value)} />
            </div>
          </div>

          {btnLoading ? 
            <button disabled className={styles.btn_disabled}>
            Signing Up...
          </button>
         :
          <button onClick={handelOnSubmit} className={styles.btn}>
            Sign Up
          </button>
          
          }

         

         

        </form>
      </div>
    </div>
  )
}

export default Signup;