import styles from './headerquiz.module.css';
import React from 'react'
import Logo from './../logo/logo';
import { useSelector } from 'react-redux';


function Headerquiz() {
  const sourse = useSelector(state => state.counter.sourse)
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

