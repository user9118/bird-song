"use client"
import React, { useEffect, useState, forwardRef } from "react";
import styles from "./birdlist.module.css";
import birdsData from "@/data/data_birds";
import {selectedBirdSet, roundWinSet, sourseSet,} from "../../store/globalSlice";
import { useAppDispatch, useAppSelector } from "@/store";


interface BirdlistProps {
  round: number
}

const Birdlist = forwardRef<HTMLUListElement, BirdlistProps>(({round}, ref) => {
  const sourse = useAppSelector((state) => state.storage1.sourse)
  const [data, setData] = useState(birdsData[round]); //загрузка списка птиц в раунде
  let [roundSourse, roundSourseSet] = useState(5);
  const dispatch = useAppDispatch();
  const rightBird = useAppSelector((state) => state.storage1.rightBird); 
  const roundWin = useAppSelector((state) => state.storage1.roundWin); 
  const rightSound: any = new Audio('/data/right.mp3')
  const errorSound: any = new Audio('/data/eror.mp3')

  const verification = (e: any) => {
    if (e.target.value == rightBird && !roundWin) {
      e.target.children[0].style.backgroundColor = "green";
      rightSound.play()
      dispatch(roundWinSet(true));
      dispatch(sourseSet(sourse + roundSourse));
    } else if (!roundWin && e.target.value !== rightBird) {
      e.target.children[0].style.backgroundColor = "red";
      roundSourseSet(roundSourse - 1);
      errorSound.play()
    }
    dispatch(selectedBirdSet(e.target.value));
  }

  const reRender = data.map((e) => (
    <li key={e.id} value={e.id} className={styles.li} onClick={(e) => {verification(e)}}>
      <span className={styles.dot}></span>{e.name}
    </li>
  ))

  const newListBird = (round: number) => {
    const data = birdsData[round]
    setData(data)
  }

  useEffect(() => {newListBird(round); roundSourseSet(5)}, [round])
  return (
    <div>
      <ul ref={ref} className={styles.birdlist}>
        {reRender}
      </ul>
    </div>
  );
})

Birdlist.displayName = 'Birdlist'
export default Birdlist

