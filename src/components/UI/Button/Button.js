import React from 'react';
import * as styles from './Button.css';

const button = (props) => {
  return (
    <span>
      <button className={styles.Button} onClick={props.clickHandler} disabled={props.disabled}>{props.caption}</button>
    </span>
  );
}

export default button;