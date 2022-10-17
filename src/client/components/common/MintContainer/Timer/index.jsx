import classnames from "classnames";
import { useEffect, useState } from "react";
import ConnectWalletButton from "../../ConnectWalletButton";
import LinkComponent from "../../LinkComponent";

import { countdown } from "../Timer/countdown";
import styles from "./Timer.module.scss";
import animateStyles from "./MintAnimation.module.scss";

const Timer = ({ time, title, sepPage, render }) => {
  const [currentTime, setCurrentTime] = useState(countdown(time || 1665865248));
  let timer;
  const runTimer = () => {
    timer = setInterval(() => {
      const getTime = countdown(time);
      setCurrentTime(getTime);
      // if (nextTimeStr === STOP_TIMER) {
      //   clearInterval(timer);
      // }
    }, 1000);
  };

  useEffect(() => {
    runTimer();
    return () => clearInterval(timer);
  });

  return (
    Object.keys(currentTime).length &&
    time > 0 && (
      <div
        className={classnames(styles.FlipClock, {
          [animateStyles.FlipClock]: sepPage
        })}
      >
        <div className={styles.contentBlock}>
          <div className={styles.titleOfMintBlock}>
            {title || "Don't miss our drop"}
          </div>
          <div className={styles.timeBlock}>
            {Object.keys(currentTime).map((uot) => (
              <div key={uot}>
                <div className={styles.uotSection}>
                  {currentTime[uot].map((time, index) => (
                    <div
                      className={styles.uotCurrentTime}
                      key={`${index}__${uot}`}
                    >
                      <div className={styles.numberOfUot}>{time}</div>
                    </div>
                  ))}
                </div>
                <div className={styles.nameOfUot}>{uot}</div>
              </div>
            ))}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center"
            }}
          >
            {sepPage ? (
              <div style={{ marginTop: "60px", width: "100%" }}>
                {render && render()}
              </div>
            ) : (
              <div className={styles.connectWallet}>
                <a href="/mint" target="_blank">
                  MINT
                </a>
              </div>
            )}
          </div>

          {/* <LinkComponent text="MINTER" />
          <ConnectWalletButton
            walletStyles={styles.connectWallet}
            replaceTo="mint"
          /> */}
        </div>
      </div>
    )
  );
};

export default Timer;
