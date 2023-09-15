import React from "react";
import styles from "./birdinfo.module.css";
import birdsData from "@/data/data_birds";
import { useAppSelector } from "@/store";

function Birdinfo() {
  const round = useAppSelector((state) => state.storage1.round);
  const selectedBird = useAppSelector((state) => state.storage1.selectedBird);
  console.log(selectedBird);
  
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
