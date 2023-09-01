import React, { useEffect, useState, useRef } from "react";
import styles from "./birdlist.module.css";
import birdsData from "/src/data_birds";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedBirdSet,
  roundWinSet,
  sourseSet,
} from "../../store/globalSlice";

function Birdlist({ round }) {
  const sourse = useSelector((state) => state.counter.sourse)
  const [data, setData] = useState(birdsData[round]); //загрузка списка птиц в раунде
  let [roundSourse, roundSourseSet] = useState(5);
  useEffect(() => {setData(birdsData[round]); roundSourseSet(5)}, [round])

  const dispatch = useDispatch();
  const rightBird = useSelector((state) => state.counter.rightBird); //
  const roundWin = useSelector((state) => state.counter.roundWin); //
  const allLi = document.querySelectorAll(".li");

  const reRender = data.map((e) => (
    <li
      key={e.id}
      value={e.id}
      className={styles.li}
      onClick={(e) => {
        if (e.target.value == rightBird) {
          e.target.style.background = "green";
          dispatch(roundWinSet(true));
          dispatch(sourseSet(sourse + roundSourse));
        } else if (!roundWin && e.target.value !== rightBird) {
          e.target.classList.add("answedBad");
          roundSourseSet(roundSourse - 1);
        }
        dispatch(selectedBirdSet(e.target.value));
        console.log(sourse);
      }}
      
    >
      {e.name}
    </li>
  ))


  return (
    <>
      <ul className={styles.birdlist}>
        {reRender}
      </ul>
    </>
  );
}

export default Birdlist;
