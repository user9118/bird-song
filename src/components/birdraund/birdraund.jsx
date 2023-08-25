import React, { useEffect } from "react";
import styles from "./birdraund.module.css";
import { useDispatch, useSelector } from "react-redux";
import birdsData from "/src/data_birds";

function Birdraund({ roundBird }) {
  const round = useSelector((state) => state.counter.round);
  const data = birdsData[round][roundBird];
  const roundWin = false;
  return (
    <div className={styles.birdRaund}>
      {roundWin ? (
        <>
          <div className={styles.img} style={{backgroundImage: 'url(/src/assets/img/bird.jpg)'}}></div>
          <div className="name">{data.name}</div>
          <audio controls src={data.audio}></audio>
        </>
      ) : (
        <>
          <div className={styles.img} style={{backgroundImage: 'url(/src/assets/img/bird.jpg)'}}></div>
          <div className="name">*******</div>
          <audio controls src={data.audio}></audio>
        </>
      )}
    </div>
  );
}

export default Birdraund;
