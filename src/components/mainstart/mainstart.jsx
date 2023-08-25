import React from "react";
import styles from "./mainstart.module.css";
import { Link } from "react-router-dom";

function Mainstart() {
  return (
    <main className={styles.main}>
      <h1>Who's chiriking?</h1>
      <h2>Угадай мелодию</h2>
      <div>
        <img className={styles.foto} src="src\assets\img\main.png" alt="" />
      </div>
      <Link to={`quiz`}>
        <button className={styles.startgame}>Начать игру</button>
      </Link>
      <button className={styles.advice}>
        Послушать совет от <br /> птичьей личности
      </button>
      
    </main>
  );
}

export default Mainstart;
