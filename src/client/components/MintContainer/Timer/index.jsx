import { useEffect, useRef, Fragment } from "react";
import Flipper from "./Flipper";
import { countdown } from "../Timer/countdown";
import styles from "./Timer.module.scss";
const STOP_TIMER = "00000000";
const Timer = ({ time }) => {
  const flipperDays1 = useRef(null);
  const flipperDays2 = useRef(null);
  const flipperHour1 = useRef(null);
  const flipperHour2 = useRef(null);
  const flipperMinute1 = useRef(null);
  const flipperMinute2 = useRef(null);
  const flipperSecond1 = useRef(null);
  const flipperSecond2 = useRef(null);
  const flippers = [
    flipperDays1,
    flipperDays2,
    flipperHour1,
    flipperHour2,
    flipperMinute1,
    flipperMinute2,
    flipperSecond1,
    flipperSecond2
  ];
  let timer;
  const init = () => {
    for (let i = 0; i < flippers.length; i++) {
      flippers[i]?.current?.setBack(countdown(time)[i]);
      flippers[i]?.current?.setFront(countdown(time)[i]);
    }
  };
  const runTimer = () => {
    timer = setInterval(() => {
      const nowTimeStr = countdown(time, 1000);
      const nextTimeStr = countdown(time);
      if (nextTimeStr === STOP_TIMER) {
        clearInterval(timer);
      }
      for (let i = 0; i < flippers.length; i++) {
        if (nowTimeStr[i] === nextTimeStr[i]) {
          continue;
        }
        flippers[i]?.current?.flipDown(nowTimeStr[i], nextTimeStr[i]);
      }
    }, 1000);
  };

  useEffect(() => {
    init();
    runTimer();
    return () => clearInterval(timer);
  });

  return (
    <div className={styles.FlipClock}>
      {flippers.map((flipper, index) => {
        const isDrawEm = (index + 1) % 2 === 0 && index !== flippers.length - 1;
        return (
          <Fragment key={`ref__${index}`}>
            <Flipper ref={flipper} />
            {isDrawEm && <em>:</em>}
          </Fragment>
        );
      })}
    </div>
  );
};

export default Timer;
