import styles from "./Flipper.module.scss";
import classes from "classnames";
import { forwardRef, useState, useImperativeHandle } from "react";
const Flipper = (props, ref) => {
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipType, setFlipType] = useState("down");
  const [frontTextFromData, setFrontTextFromData] = useState(0);
  const [backTextFromData, setBackTextFromData] = useState(null);

  const _textClass = (number) => {
    const num = `number${number}`;
    return `${styles[num]}`;
  };

  const _flip = (type, front, back) => {
    if (isFlipping) {
      return false;
    }
    setFrontTextFromData(front);
    setBackTextFromData(back);
    setFlipType(type);
    setIsFlipping(true);
    setTimeout(() => {
      setFrontTextFromData(back);
      setIsFlipping(false);
    }, 500);
  };

  const flipDown = (front, back) => {
    _flip(styles.down, front, back);
  };

  const flipUp = (front, back) => {
    _flip(styles.up, front, back);
  };

  const setFront = (text) => {
    setFrontTextFromData(text);
  };

  const setBack = (text) => {
    setBackTextFromData(text);
  };

  useImperativeHandle(ref, () => ({
    setFront,
    setBack,
    flipDown,
    flipUp
  }));

  return (
    <div
      className={classes(styles.MFlipper, flipType, {
        [styles.go]: isFlipping
      })}
    >
      <div
        className={classes(
          styles.digital,
          styles.front,
          _textClass(frontTextFromData)
        )}
      />
      <div
        className={classes(
          styles.digital,
          styles.back,
          _textClass(backTextFromData)
        )}
      />
    </div>
  );
};
export default forwardRef(Flipper);
