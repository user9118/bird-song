"use client"
import styles from './page.module.css'

import React from 'react'
import Header from '@/components/header/header';
import  Link  from 'next/link';
import { useAppSelector } from '@/store';
import Footer from '@/components/footer/footer';
import Button from './../../ui/button/button';

function endgame() {
  const sourse = useAppSelector(state => state.storage1.sourse)
  return (
    <>
    <Header />
    <main className={styles.main}>
      <div className={styles.sourse}>Ваш счет: {sourse}</div> 
      <div>
        <Link href={{ pathname: "/" }}> <Button>Попробовать еще</Button> </Link>
      </div>
    </main>
    <Footer />
    </>
  )
}

export default endgame

