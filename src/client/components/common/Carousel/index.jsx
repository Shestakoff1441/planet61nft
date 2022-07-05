import { useEffect, useState } from "react";
import Image from "next/image";
import cart1 from "../../../assets/images/14.png";
import cart2 from "../../../assets/images/25.png";
import cart3 from "../../../assets/images/38.png";
import cart4 from "../../../assets/images/39.png";
import cart5 from "../../../assets/images/47.png";
import cart6 from "../../../assets/images/54.png";
import cart7 from "../../../assets/images/59.png";
import cart8 from "../../../assets/images/63.png";
import cart9 from "../../../assets/images/85.png";
import styles from "./Carousel.module.scss";

const sliderElements = [
  { url: cart3 },
  { url: cart4 },
  { url: cart1 },
  { url: cart5 },
  { url: cart6 },
  { url: cart7 },
  { url: cart2 },
  { url: cart8 },
  { url: cart9 }
];

const Carousel = () => {
  const [index, setIndex] = useState(0);
  //   const [imagePosition, setImagePosition] = useState({
  //     previous: sliderElements.length,
  //     current: 0,
  //     next: 1
  //   });
  const [imagePosition, setImagePosition] = useState(0);

  const getIndex = (index, array) => {
    if (Math.abs(index) % array.length === 0) {
      setIndex(0);
      setImagePosition(0);
    } else if (index > 0) {
      setImagePosition(Math.abs(index) % array.length);
    } else if (index < 0) {
      setImagePosition(array.length - Math.abs(index));
    }
  };
  useEffect(() => {
    getIndex(index, sliderElements);
  }, [index]);
  console.log("imagePo  ", imagePosition);
  return (
    <div className={styles.carousel}>
      <button onClick={() => setIndex((index) => index - 1)}>prev</button>
      <div className={styles.imagesContainer}>
        <div className={styles.imagesVisibleElemes}></div>
      </div>
      <Image
        src={sliderElements[imagePosition].url.src}
        width={250}
        height={250}
        alt=""
      />
      <Image
        src={
          sliderElements[(imagePosition + 1) % sliderElements.length].url.src
        }
        width={350}
        height={350}
        alt=""
      />
      <Image
        src={
          sliderElements[(imagePosition + 2) % sliderElements.length].url.src
        }
        width={250}
        height={250}
        alt=""
      />
      <button onClick={() => setIndex((index) => index + 1)}>next</button>
    </div>
  );
};
export default Carousel;
