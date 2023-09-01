import React, { useState, useEffect } from 'react'
import Headerquiz from '/src/components/headerquiz/headerquiz';
import Category from './../../components/category/category';
import styles from './quiz.module.css';
import Birdraund from './../../components/birdraund/birdraund';
import Birdlist from './../../components/birdlist/birdlist';
import Birdinfo from '../../components/birdinfo/birdinfo';
import Quizfooter from './../../components/quizfooter/quizfooter';
import { useSelector, useDispatch } from 'react-redux'
import { roundSet, rightBirdSet, roundWinSet, selectedBirdSet } from '../../store/globalSlice';

function Quiz() {
  const dispatch = useDispatch();
  const roundWin = useSelector((state) => state.counter.roundWin);
  const round = useSelector((state) => state.counter.round);
  const rightBird = useSelector((state) => state.counter.rightBird)
  const roundBird = useState(rightBird)
  useEffect(() => {dispatch(rightBirdSet(Math.floor(Math.random() * 6)))}, [round])
  return (
    <>
      {roundBird ? (
        <>
          <Headerquiz />
          <main className={styles.main}>
            <div className={styles.wrap}>
              <div className={styles.container}>
                <Category />
                <div className={styles.grid}>
                  <Birdraund />
                  <Birdlist round={round} />
                  <Birdinfo />
                </div>
                <button
                  disabled={!roundWin}
                  className={styles.btn}
                  onClick={(e) => {
                    dispatch(roundSet(round + 1));
                    dispatch(roundWinSet(false));
                    dispatch(selectedBirdSet(undefined))
                  }}
                >
                  Next level
                </button>
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
export default Quiz