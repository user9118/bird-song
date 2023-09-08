import React, { useState, useEffect, useRef } from "react";
import Headerquiz from "/src/components/headerquiz/headerquiz";
import Category from "./../../components/category/category";
import styles from "./quiz.module.css";
import Birdraund from "./../../components/birdraund/birdraund";
import Birdlist from "./../../components/birdlist/birdlist";
import Birdinfo from "../../components/birdinfo/birdinfo";
import Quizfooter from "./../../components/quizfooter/quizfooter";
import { useSelector, useDispatch } from "react-redux";
import {
  roundSet,
  rightBirdSet,
  roundWinSet,
  selectedBirdSet,
} from "../../store/globalSlice";
import { Link } from "react-router-dom";

function Quiz() {
  const dispatch = useDispatch();
  const roundWin = useSelector((state) => state.counter.roundWin);
  const round = useSelector((state) => state.counter.round);
  const rightBird = useSelector((state) => state.counter.rightBird);
  const roundBird = useState(rightBird);
  const ul = useRef();
  useEffect(() => {
    dispatch(rightBirdSet(Math.floor(Math.random() * 6)));
  }, [round]);
  return (
    <>
      {roundBird ? (
        <>
          <Headerquiz />
          <main className={styles.main}>
            <div className={styles.wrap}>
              <div className={styles.container}>
                <Category round={round} />
                <div className={styles.grid}>
                  <Birdraund />
                  <Birdlist ref={ul} round={round} />
                  <Birdinfo />
                </div>
                {round < 5 ? (
                  <button disabled={!roundWin} style={roundWin ? { opacity: 1 } : { opacity: 0.5 }} className={styles.btn} 
                    onClick={(e) => {
                      dispatch(roundSet(round + 1));
                      dispatch(roundWinSet(false));
                      dispatch(selectedBirdSet(undefined));
                      {Array.from(ul.current.children).forEach((e) => {e.children[0].style.backgroundColor = "gray"})}}}
                  >
                    Next level
                  </button>
                ) : (
                  <Link to={"/"}>
                    <button
                      disabled={!roundWin}
                      style={roundWin ? { opacity: 1 } : { opacity: 0.5 }}
                      className={styles.btn}
                    >
                      Узнать результат
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </main>
          <Quizfooter />
        </>
      ) : (
        "загрузка"
      )}
    </>
  );
}
export default Quiz;
