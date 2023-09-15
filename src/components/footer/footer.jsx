import styles from './footer.module.css';
import React from 'react'

function Footer() {
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

export default Footer

