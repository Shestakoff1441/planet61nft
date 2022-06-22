import { useEffect, useRef } from 'react';
import { animatedSky } from './canvasAnimation';
import styles from './FirstSection.module.scss';



const FirstSection = () => {
  useEffect(() => {
    animatedSky();
  }, [])

  return (
      <div className={styles.sectionContainer}>
        <div id="large-header" className={styles.largeHeader}>
          <canvas id="demo-canvas"></canvas>
          <h1 className={styles.mainTitle}>
            PLANET <span className={styles.thin}>61</span>
          </h1>
          <div className={styles.buttonsBlock}>
            <button className={styles.firstSectionButton}>VIEW ON OPENSEA</button>
            <button className={styles.firstSectionButton}>VIEW IN BINANCE</button>
          </div>
        </div>
      </div>
  )
}
export default FirstSection
