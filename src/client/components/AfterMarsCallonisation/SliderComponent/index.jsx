import React, { useState } from "react";
import Carousel from "react-simply-carousel";
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
import styles from "./Slider.module.scss";

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

const App = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div>
      <Carousel
        activeSlideIndex={activeSlide}
        activeSlideProps={{
          style: {
            width: "350px",
            height: "350px",
            display: "flex",
            justifyContent: "center"
          }
        }}
        onRequestChange={setActiveSlide}
        forwardBtnProps={{
          children: <span className={styles.arrowRight}></span>,
          style: {
            border: "none",
            background: "transparent",
            alignSelf: "center"
          }
        }}
        backwardBtnProps={{
          children: <span className={styles.arrowLeft}></span>,
          style: {
            border: "none",
            background: "transparent",
            alignSelf: "center"
          }
        }}
        itemsListProps={{
          style: {
            display: "flex",
            alignItems: "center"
          }
        }}
        innerProps={{
          style: {
            minWidth: "950px"
          }
        }}
        itemsToShow={3}
        itemsToScroll={1}
        speed={400}
        centerMode={true}
      >
        {sliderElements.map((el, index) => (
          <div className={styles.slideElement} key={index}>
            <Image width={300} height={300} src={el.url.src} alt="" />
          </div>
        ))}
      </Carousel>
    </div>
  );
};
export default App;
