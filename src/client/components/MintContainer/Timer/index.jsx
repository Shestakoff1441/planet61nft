import { useEffect, useState } from "react";
import ConnectWalletButton from "../../common/ConnectWalletButton";
import { countdown } from "../Timer/countdown";
import styles from "./Timer.module.scss";
const Timer = ({ time }) => {
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
      <div className={styles.FlipClock}>
        <div className={styles.contentBlock}>
          <div className={styles.titleOfMintBlock}>{"Don't miss our drop"}</div>
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
          <ConnectWalletButton walletStyles={styles.connectWallet} />
        </div>
      </div>
    )
  );
};

export default Timer;
