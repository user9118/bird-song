import React, { useEffect, useState, useRef } from "react";
import styles from "./birdlist.module.css";
import birdsData from "/src/data_birds";
import { useDispatch, useSelector } from "react-redux";
import {selectedBirdSet, roundWinSet, sourseSet,} from "../../store/globalSlice";

const Birdlist = React.forwardRef(({round}, ref) => {
  const sourse = useSelector((state) => state.counter.sourse)
  const [data, setData] = useState(birdsData[round]); //загрузка списка птиц в раунде
  let [roundSourse, roundSourseSet] = useState(5);
  const dispatch = useDispatch();
  const rightBird = useSelector((state) => state.counter.rightBird); 
  const roundWin = useSelector((state) => state.counter.roundWin); 
  let rightSound = new Audio('/src/data/right.mp3')
  let errorSound = new Audio('/src/data/eror.mp3')

  const verification = (e) => {
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

  const newListBird = (round) => {
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

export default Birdlist;
