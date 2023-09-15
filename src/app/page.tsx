"use client"
import styles from './page.module.css'
import React from "react";
import Header from '@/components/header/header';
import Homemain from '@/components/homemain/homemain';

import Link from 'next/link';

export default function Root() {
  return (
    <div className='body'>
    <Header />
    <Homemain />

    </div>
  )
}
