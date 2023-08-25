import React, { useState, useEffect } from 'react'
import Logo from '/src/components/logo/logo';
import Headerquiz from '/src/components/headerquiz/headerquiz';
import Category from './../../components/category/category';
import styles from './quiz.module.css';
import Birdraund from './../../components/birdraund/birdraund';
import Birdlist from './../../components/birdlist/birdlist';
import Birdinfo from '../../components/birdinfo/birdinfo';
import Quizfooter from './../../components/quizfooter/quizfooter';
import { useSelector, useDispatch } from 'react-redux'
import { sourseSet, roundSet } from '../../store/globalSlice';
import birdsData from '/src/data_birds';


function Quiz() {
  const sourse = useSelector(state => state.counter.sourse)
  const round = useSelector(state => state.counter.round)
  const dispatch = useDispatch();
  const randomNumber = Math.floor(Math.random() * 6)
  const roundBird = randomNumber
  // useEffect(() => {randomNumber = Math.floor(Math.random() * 6)}, [round])
  
  return (
    <>
      <Headerquiz sourse={sourse} />
      <main className={styles.main}>
        <div className={styles.wrap}>
          <div className={styles.container}>
            <Category />
            <div className={styles.grid}>
              <Birdraund roundBird ={roundBird}/>
              <Birdlist round = {round}/>
              <Birdinfo />
            </div>
            <button className={styles.btn} onClick={e => {dispatch(roundSet(round + 1))}}>Next level</button>
          </div>
        </div>
      </main>
      <Quizfooter />
    </>
  )
}
export default Quiz