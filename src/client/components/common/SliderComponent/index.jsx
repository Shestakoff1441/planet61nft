import React, { useState } from "react";
import Carousel from "react-simply-carousel";
import Image from "next/image";
import styles from "./Slider.module.scss";

const Slider = ({ slides = [] }) => {
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
        {slides.map((el, index) => (
          <div className={styles.slideElement} key={index}>
            <Image width={300} height={300} src={el.url.src} alt="" />
          </div>
        ))}
      </Carousel>
    </div>
  );
};
export default Slider;
