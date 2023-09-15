"use client"
import React, { useState, useEffect, createRef } from "react";
import Link from 'next/link';

import styles from './page.module.css'

import Headerquiz from "@/components/headerquiz/headerquiz";
import Category from "@/components/category/category";
import Birdraund from "@/components/birdraund/birdraund";
import Birdlist from "@/components/birdlist/birdlist";
import Birdinfo from "@/components/birdinfo/birdinfo";
import Quizfooter from "@/components/quizfooter/quizfooter";
import { useAppDispatch, useAppSelector } from "@/store";

import { roundSet, rightBirdSet, roundWinSet, selectedBirdSet,} from "@/store/globalSlice";

const Page = () => {
  const dispatch = useAppDispatch();
  const roundWin = useAppSelector((state) => state.storage1.roundWin);
  const round = useAppSelector((state) => state.storage1.round);
  const rightBird = useAppSelector((state) => state.storage1.rightBird);
  const roundBird = useState(rightBird);
  const ul = createRef<HTMLUListElement>();
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
                <Birdlist round={round} ref={ul}/>
                <Birdinfo />
                </div>
                {round < 5 ? (
                  <button disabled={!roundWin} style={roundWin ? { opacity: 1 } : { opacity: 0.5 }} className={styles.btn} 
                    onClick={(e) => {
                      dispatch(roundSet(round + 1));
                      dispatch(roundWinSet(false));
                      dispatch(selectedBirdSet(undefined));
                      {
                        ul.current ? (Array.from(ul.current.children).forEach((e: any) => {e.children[0].style.backgroundColor = "gray"})) : ('')
                      }}}
                  >
                    Next level
                  </button>
                ) : (
                  <Link href={{ pathname: "/endgame" }}>                    
                    <button disabled={!roundWin} style={roundWin ? { opacity: 1 } : { opacity: 0.5 }} className={styles.btn}>
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
  )
}

export default Page
