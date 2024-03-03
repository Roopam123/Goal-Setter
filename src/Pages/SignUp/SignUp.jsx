import React, { useState } from 'react';
import "./SignUp.css";
import Button from '../../components/Button/Button';
import img from '../../Assets/goal.png';
import { register } from '../../api';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from 'react-router-dom';

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [username, setUsername] = useState("");
  const [qualification, setQualification] = useState("");
  const [password, setPassword] = useState("");
  const [conformPassword, setConformPassword] = useState("");
  const [address, setAddress] = useState("");
  const [disableBtn,setDisableBtn] = useState(false)

  const data = {
    fName: firstName,
    lName: lastName,
    mobile: mobileNo,
    username: username,
    qualification: qualification,
    password: password,
    cpassword: conformPassword,
    address: address
  }

  const navigate = useNavigate();
  const handelOnSubmit = async (e) => {
    e.preventDefault()

    // If password and confirm password is not same
    if (password != conformPassword) {
      return toast.error("Password mismatch, please ensure they are identical.",{
          position:"top-center",
        }
      );
    }
    // if all field is not filled
    if (firstName==="" ||
        lastName==="" ||
        password ===""|| 
        conformPassword===""||
        mobileNo===""||
        username===""||
        qualification===""||
        address===""
        ) {
          return toast.error("Ensure all fields are completed, please.",{
            position: "top-center"}
        );
      }
      // fetch data
    try {
      const responce = await register(data);
      if (responce) {
        toast.success("Signup successful! Please proceed to login and start your journey with us.",{
          position:"top-center"
        })
        navigate("/")
        setDisableBtn(true)
        setFirstName("");
        setLastName("");
        setMobileNo("");
        setQualification("");
        setUsername("");
        setPassword("");
        setConformPassword("");
        setAddress("")
      }
    } catch (err) {
      toast.error("Error occurred during registration",{
        position:"top-center"
      });
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
              <span >First Name*</span>
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
                     onChange={(e) => setLastName(e.target.value)} />
            </div>
          </div>
          <div className="form-item">
            <div className="form-content">
              <span>Mobile No.*</span>
              <input type="text" 
                     placeholder='Mobile No.' 
                     value={mobileNo}
                     onChange={(e) => setMobileNo(e.target.value)} />
            </div>
            <div className="form-content">
              <span>Qualification*</span>
              <input type="text" 
                     placeholder='Qualification'
                     value={qualification} 
                     onChange={(e) => setQualification(e.target.value)} />
            </div>
          </div>
          <div className="form-item">
            <div className="form-content">
              <span>Username*</span>
              <input type="text"
                     placeholder='Username'
                     value={username}
                     onChange={(e) => setUsername(e.target.value)}
                     />
            </div>
            <div className="form-content">
              <span>Password*</span>
              <input type="password" 
                     placeholder='Password' 
                     value={password}
                     onChange={(e) => setPassword(e.target.value)} />
            </div>
          </div>
          <div className="form-item">
            <div className="form-content">
              <span>Confirm Password*</span>
              <input type="password"
                     placeholder='Confirm Password'
                     value={conformPassword}
                     onChange={(e) => setConformPassword(e.target.value)}
                     />
            </div>
            <div className="form-content">
              <span>Address</span>
              <input type="text" 
                     placeholder='Address' 
                     value={address}
                     onChange={(e) => setAddress(e.target.value)} />
            </div>
          </div>
          <button disabled={disableBtn?true:false} onClick={handelOnSubmit}className='button'><Button title="Sign Up"/></button>
        </form>
      </div>
    </div>
  )
}

export default Signup;
