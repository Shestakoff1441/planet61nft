import { useEffect } from "react";
import LinkComponent from "../common/LinkComponent";
import { animatedSky } from "./canvasAnimation";
import styles from "./InitialSection.module.scss";

const InitialSection = () => {
  useEffect(() => {
    animatedSky();
  }, []);

  return (
    <div className={styles.sectionContainer}>
      <div id="large-header" className={styles.largeHeader}>
        <canvas id="demo-canvas"></canvas>
        <h1 className={styles.mainTitle}>
          PLANET <span className={styles.thin}>61</span>
        </h1>
        <div className={styles.buttonsBlock}>
          <LinkComponent
            text="VIEW IN BINANCE"
            classes={styles.firstSectionButton}
            href="https://www.binance.com/fr/nft/profile/planet61-3949254e9009569f223e41a9c530aef2"
          />
        </div>
      </div>
    </div>
  );
};
export default InitialSection;
