import styles from './headerquiz.module.css';
import React from 'react'
import Logo from './../logo/logo';

function Headerquiz({sourse}) {
  return (
     <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.content}>
          <Logo />
          <div className={styles.sourse}>Счет:{sourse}</div>
        </div>
      </div>
     </header>
  )
}

export default Headerquiz

