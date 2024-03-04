import React from 'react';
import Button from '../../components/Button/Button';
import img from '../../Assets/signin.png'
import './SignIn.css'


const SignIn = () => {
  return (
    <div className='signup'>
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
              <input type="text" placeholder='Enter your your name' />
            </div>
            <div className="form-content">
              <span>Password</span>
              <input type="password" placeholder='Enter your password' />
            </div>
          </div>
          <span className='button'><Button title="Sign In"/></span>
        </form>
      </div>
    </div>
  )
}

export default SignIn;
