import React from 'react';
import styles from './header.module.css';
import Logo from '../logo/logo';

function Header() {
  return (
     <div className={styles.header}>
      <nav className={styles.nav}>
        <Logo/>
        <div style={{justifySelf: 'center'}}>Abaut game</div>
        <div>more info</div>
      </nav>
     </div>
  )
}

export default Header

