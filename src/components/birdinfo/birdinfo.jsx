import React, { useEffect } from "react";
import styles from "./birdinfo.module.css";
import { useSelector } from "react-redux";
import birdsData from "/src/data_birds";

function Birdinfo() {
  const round = useSelector((state) => state.counter.round);
  const selectedBird = useSelector((state) => state.counter.selectedBird);
  let data = birdsData[round][selectedBird];
  // useEffect (() => {}, [selectedBird])
  return (
    <div className={styles.birdinfo}>
      {typeof selectedBird == "number" ? (
        <>
          <div className={styles.flex}>
            <div className={styles.foto} style={{backgroundImage: `url(${data.image})`}}></div>
            <div className="name">
              {data.name}
              <br />
              {data.species}
            </div>
          </div>
          <audio controls className={styles.audio} src={data.audio}></audio>
          <div className={styles.info}>{data.description}</div>
        </>
      ) : (
        <div>****</div>
      )}
    </div>
  );
}

export default Birdinfo;
