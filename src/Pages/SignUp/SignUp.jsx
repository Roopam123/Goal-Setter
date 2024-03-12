import React, { useEffect, useState } from 'react';
import "./SignUp.css";
import Button from '../../components/Button/Button';
import img from '../../Assets/goal.png';
import { register, checkUsername } from '../../api';
// import 'react-toastify/dist/ReactToastify.css';


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
  
  useEffect(()=>{
    handleUsernameChange()
  }, [username])


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
  const handelOnSubmit = async (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      // setError("Password and Confirm Password is not same!")
      return;
    }
    if (firstName==="" ||
        lastName==="" ||
        password ===""|| 
        confirmPassword===""||
        mobileNo===""||
        username===""||
        qualification===""||
        address===""
        ) {
          // setError("Please fill all fields");
          return;
    }
    try {
      await register(data);
      // toast.success("Registration Successful");
    } catch (err) {
      console.log("SignUp Error");
      // toast.error("Error occurred during registration");
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
        // show error by toust
      }
  }
  return (
    <div className='signup'>
      {/* Left */}
      <div className="singup-left">
        <img src={img} alt="" />
      </div>
      {/* Right */}
      <div className="signup-right">
        <form>
          <div className="form-item">
            <div className="form-content">
              <span>First Name*</span>
              <input type="text" 
                     placeholder='Enter your first name' 
                     value={firstName}
                     onChange={(e) => setFirstName(e.target.value)} />
            </div>
            <div className="form-content">
              <span>Last Name*</span>
              <input type="text" 
                     placeholder='Enter your last name' 
                     value={lastName}
                     onChange={handelOnSubmit} />
            </div>
          </div>
          <div className="form-item">
            <div className="form-content">
              <span>Mobile No.*</span>
              <input type="text" 
                     placeholder='Enter your Mobile No.' 
                     value={mobileNo}
                     onChange={(e) => setMobileNo(e.target.value)} />
            </div>
            <div className="form-content">
              <span>Qualification*</span>
              <input type="text" 
                     placeholder='First Name'
                     value={qualification} 
                     onChange={(e) => setQualification(e.target.value)} />
            </div>
          </div>
          <div className="form-item">
            <div className="form-content">
              <span>Username*</span>
              <input type="text"
                     placeholder='Enter your username'
                     value={username}
                     onChange={(e)=> setUsername(e.target.value)}
                     />
                {usernameExists && <small className='small_error'>username taken</small>}
            </div>
            <div className="form-content">
              <span>Password*</span>
              <input type="password" 
                     placeholder='Enter your password' 
                     value={password}
                     onChange={(e) => setPassword(e.target.value)} />
            </div>
          </div>
          <div className="form-item">
            <div className="form-content">
              <span>Confirm Password*</span>
              <input type="password"
                     placeholder='Confirm Password'
                     value={confirmPassword}
                     onChange={(e) => setConfirmPassword(e.target.value)}
                     />
            </div>
            <div className="form-content">
              <span>Address</span>
              <input type="text" 
                     placeholder='Enter your Address' 
                     value={address}
                     onChange={(e) => setAddress(e.target.value)} />
            </div>
          </div>
          <span onClick={handelOnSubmit} className='button'><Button title="Sign Up"/></span>
        </form>
      </div>
    </div>
  )
}

export default Signup;
