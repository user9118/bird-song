import styles from './quizfooter.module.css';
import React from 'react'

function Quizfooter() {
  return (
     <footer className={styles.footer}>
      <div className={styles.container}>
        <ul className={styles.content}>
        <li>Abaut autor</li>
        <li> 2023</li>
        <li>лого</li>
        </ul>
      </div>
     </footer>
  )
}

export default Quizfooter

