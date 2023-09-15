import React from "react";
import styles from "./birdraund.module.css";
import birdsData from "@/data/data_birds";
import { useAppSelector } from "@/store";

function Birdraund() {
  const rightBird = useAppSelector((state) => state.storage1.rightBird)
  const roundWin = useAppSelector((state) => state.storage1.roundWin); // 
  const round = useAppSelector((state) => state.storage1.round);
  const data = birdsData[round][rightBird];
  console.log(data);
  
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
          <div className={styles.img} style={{backgroundImage: 'url(/img/bird.jpg)'}}></div>
          <div className="name">*******</div>
          <audio controls src={data.audio}></audio>
        </>
      )}
    </div>
  );
}

export default Birdraund;
