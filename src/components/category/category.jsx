import React from 'react';
import styles from './category.module.css';

function Category() {
  return (
     <div className={styles.categories}>
      <ul className={styles.list}>
        <li>Домашние</li>
        <li>Городские</li>
        <li>Зимующие</li>
        <li>Певчие</li>
        <li>Хищные</li>
        <li>Морские</li>
      </ul>
     </div>
  )
}

export default Category

