import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import styles from  '../styles/navbar.module.css';
import { useAuth } from '../hooks';

const Navbar = () => {
  const auth = useAuth();
  const [btnLoading, setBtnLoading] = useState(false);

  const handleLogout = async()=>{
      setBtnLoading(true);
      await auth.logout();
      setBtnLoading(false);
  }

  return (
    <nav>
      <div className={styles.nav_left}>
        <Link to="/"><span>GoalSetter</span></Link>
      </div>
      <div className={styles.nav_right}>
      {auth.user? 
      <>
      <p className={styles.userInfo}>Hey {auth.user.fName}</p>

      {btnLoading? 
        <button disabled className={styles.signOutBtn}>
        Signing Out...
      </button>: 

      <button onClick={handleLogout} className={styles.signOutBtn}>
        Sign Out
      </button>
      }
      </>
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
