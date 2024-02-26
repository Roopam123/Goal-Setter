import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
      <div className="nav-left">
        <Link to="/"><span>GoalSetter</span></Link>
      </div>
      <div className="nav-right">
        <Link to="/signup">
          <Button title="Sign Up"/>
        </Link>
        <Link to="/signin">
          <Button title="Sign In"/>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
