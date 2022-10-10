import type { NextPage } from 'next'
import styles from '../styles/Home.module.scss'
import WheelComponent from 'react-wheel-of-prizes'
import { useState } from 'react'
// import 'react-wheel-of-prizes/dist/index.css'

const Home: NextPage = () => {
  const [winner, setWinner] = useState('')
  const segments = [
    'better luck next time',
    'won 70',
    'won 10',
    'better luck next time',
    'won 2',
    'won uber pass',
    'better luck next time',
    'won a voucher'
  ]
  const segColors = [
    '#EE4040',
    '#F0CF50',
    '#815CD1',
    '#3DA5E0',
    '#34A24F',
    '#F9AA1F',
    '#EC3F3F',
    '#FF9000'
  ]
  const onFinished = (winner: any) => {
    setWinner(winner)
  }
  return (
    <div className={styles.home}>

      <div className={`${styles['home__background']}`}>
        <div className={`${styles['home__background-spin']}`}>
          <WheelComponent
            segments={segments}
            segColors={segColors}
            winningSegment={winner}
            onFinished={(winner: any) => onFinished(winner)}
            primaryColor='white'
            contrastColor='black'
            buttonText='Spin'
            isOnlyOnce={false}
            size={290}
            upDuration={700}
            downDuration={1000}
            fontFamily='Arial'
          />
        </div>
        <div className={`${styles['area']}`} >
          <ul className={`${styles['circles']}`}>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div >
      </div >
    </div >
  )
}

export default Home
