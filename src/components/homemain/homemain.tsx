"useClient"
import React, {FC} from "react";
import styles from "./homemain.module.css";
import Link from "next/link";
const Homemain = () => {
  return (
    <main className={styles.main}>
      <h1>Who{`'`}s chiriking?</h1>
      <h2>Угадай мелодию</h2>
      <div className={styles.foto}></div>
      <Link href={{ pathname: "/quiz" }}><button className={styles.startgame}>Начать игру</button></Link>
      <button className={styles.advice}>
        Послушать совет от <br /> птичьей личности
      </button>
    </main>
  )
}

export default Homemain

