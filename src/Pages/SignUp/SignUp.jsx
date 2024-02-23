import React from 'react';
import "./SignUp.css";
import Button from '../../components/Button/Button';
import img from '../../Assets/goal.png'
const Signup = () => {
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
              <span>First Name</span>
              <input type="text" placeholder='Enter your first name' />
            </div>
            <div className="form-content">
              <span>Last Name</span>
              <input type="text" placeholder='Enter your last name' />
            </div>
          </div>
          <div className="form-item">
            <div className="form-content">
              <span>Mobile No.</span>
              <input type="text" placeholder='Enter your Mobile No.' />
            </div>
            <div className="form-content">
              <span>Qualification</span>
              <input type="text" placeholder='First Name' />
            </div>
          </div>
          <div className="form-item">
            <div className="form-content">
              <span>Username</span>
              <input type="text" placeholder='First Name' />
            </div>
            <div className="form-content">
              <span>Password</span>
              <input type="password" placeholder='First Name' />
            </div>
          </div>
          <div className="form-item">
            <div className="form-content">
              <span>Address</span>
              <input type="text" placeholder='First Name' className='address'/>
            </div>
          </div>
          <span className='button'><Button title="Signup"/></span>
        </form>
      </div>
    </div>
  )
}

export default Signup;
