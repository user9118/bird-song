import React, { useEffect, useRef } from "react";
import styles from "./category.module.css";

function Category({ round }) {
  const ul = useRef();
  useEffect(() => {
    ul.current.children[round].classList.add("done");
  }, [round]);

  return (
    <div className={styles.categories}>
      <ul ref={ul} className={styles.list}>
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

export default Category;
