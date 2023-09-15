import React from 'react'
import styles from "./button.module.css";

function Button(props: any) {
  return (
    <button className={styles.button}>{props.children}</button>
  )
}

export default Button
