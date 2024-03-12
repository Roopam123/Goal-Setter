import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import styles from  '../styles/navbar.module.css';
import { useAuth } from '../hooks';

const Navbar = () => {
  const auth = useAuth();

  return (
    <nav>
      <div className={styles.nav_left}>
        <Link to="/"><span>GoalSetter</span></Link>
      </div>
      <div className={styles.nav_right}>
      {auth.user? 
       <p>Hey {auth.user.fName}</p>
      :
     <>
     <Link to="/signup">
          <Button title="Sign Up"/>
        </Link>
        <Link to="/signin">
          <Button title="Sign In"/>
        </Link>
     </>
      }
        
      </div>
    </nav>
  )
}

export default Navbar;
