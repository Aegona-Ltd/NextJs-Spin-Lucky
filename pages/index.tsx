import styles from '../styles/Home.module.scss'
import WheelComponent from 'react-wheel-of-prizes'
import { ReactElement, useState } from 'react'
import "react-turntable/assets/index.css"
import ConfettiComp from '../components/ConfettiComp'
import WinnerModal from '../components/WinnerModal'
import DefaultLayout from '../containers/DefaultLayout'
// import 'react-wheel-of-prizes/dist/index.css

const Home = () => {
  const [options, setOptions] = useState({})
  const [winner, setWinner] = useState("");
  const [show, setShow] = useState(false);
  const [confettiState, setConfettiState] = useState(false);
  // const { width, height } = useWindowSize();

  const segments = [
    'won 20',
    'won 70',
    'won 10',
    'won 20',
    'won 2',
    'won uber pass',
    'won 20',
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
    setShow(!show)
    setConfettiState(!confettiState)
  }

  return (
    <div className={styles.home}>
      <div className={`${styles['home__background']}`}>
        <div className={`${styles['home__background-spin']}`}>
          <div className={`${styles['home__background-spin-first']}`}></div>
          <div className={`${styles['home__background-spin-second']}`} style={{ width: '50%' }}>
            <WheelComponent
              segments={segments}
              segColors={segColors}
              winningSegment={''}
              onFinished={(winner: any) => onFinished(winner)}
              primaryColor='white'
              contrastColor='black'
              buttonText='Spin'
              isOnlyOnce={false}
              size={250}
              upDuration={700}
              downDuration={1000}
              fontFamily='Arial'
            />

            <ConfettiComp height={1000} width={confettiState ? window.innerWidth : 0} />
            {/* <TurnTable
              setWinner={setWinner}
              setShow={setShow}
              setConfettiState={setConfettiState}
            /> */}
            <WinnerModal
              show={show}
              winner={winner}
              onClose={() => {
                setConfettiState(false)
                setShow(false)
              }}
            />

          </div>
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

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <DefaultLayout>
      {page}
    </DefaultLayout>
  )
}

export default Home
