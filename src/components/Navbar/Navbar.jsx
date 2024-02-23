import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
      <div className="nav-left">
        <Link to="/"><span><span>Goal</span>Setter</span></Link>
      </div>
      <div className="nav-right">
        <Link to="/signup">
          <Button title="Signup"/>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
