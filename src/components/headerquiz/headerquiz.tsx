import styles from './headerquiz.module.css';
import React from 'react'

import { useAppSelector } from '@/store';
import Logo from '@/components/logo/logo';



function Headerquiz() {
  const sourse = useAppSelector(state => state.storage1.sourse)
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

