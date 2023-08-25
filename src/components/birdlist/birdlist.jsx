import React from 'react';
import styles from './birdlist.module.css';
import birdsData from '/src/data_birds';
import { useDispatch } from 'react-redux';
import { selectedBirdSet } from '../../store/globalSlice';

function Birdlist({ round }) {
  const data = birdsData[round]
  const dispatch = useDispatch();
  
  return (
    <>
      <ul className={styles.birdlist}>
        {data.map((e) => (
          <li key={e.id} value={e.id} className={styles.li} onClick={(e) => {dispatch(selectedBirdSet(e.target.value))}}>{e.name}</li>
        ))}
      </ul>
    </>
  )
}

export default Birdlist

