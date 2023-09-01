import React, { useEffect } from "react";
import styles from "./birdraund.module.css";
import { useSelector } from "react-redux";
import birdsData from "/src/data_birds";

function Birdraund() {
  const rightBird = useSelector((state) => state.counter.rightBird)
  const roundWin = useSelector((state) => state.counter.roundWin); // 
  const round = useSelector((state) => state.counter.round);
  const data = birdsData[round][rightBird];
  return (
    <div className={styles.birdRaund}>
      {roundWin ? (
        <>
          <div className={styles.img} style={{backgroundImage: `url(${data.image})`}}></div>
          <div className="name">{data.name}<br/>{data.species}</div>
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
