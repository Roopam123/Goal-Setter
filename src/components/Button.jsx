import React from 'react';
import styles from "../styles/button.module.css";

const Button = (props) => {
  return (
    <div className={styles.btn}>
      <button>{props.title}</button>
    </div>
  )
}

export default Button;
