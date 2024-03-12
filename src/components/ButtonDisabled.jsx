import React from 'react';
import styles from "../styles/button.module.css";

const ButtonDisabled = (props) => {
  return (
    <div className={styles.btnDisabled}>
      <button>{props.title}</button>
    </div>
  )
}

export default ButtonDisabled;
