import Header from '/src/components/header/header';
import Mainstart from '/src/components/mainstart/mainstart';
import styles from './start.module.css'
import { Link } from 'react-router-dom';

export default function Root() {
  return (
    <div className='body'>
    <Header />
    <Mainstart />
    </div>
  )
}
