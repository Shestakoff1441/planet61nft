import Slider from "react-slick";
import styles from "./Carousel.module.scss";

import arrowRight from "../../../assets/images/arrow.svg";
import arrowLeft from "../../../assets/images/arrowLeft.svg";

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  const classes = className.concat(" ", styles.nextArrow);
  return (
    <img
      src={arrowRight.src}
      className={classes}
      style={{ ...style }}
      onClick={onClick}
    />
  );
};

const PrevtArrow = (props) => {
  const { className, style, onClick } = props;
  const classes = className.concat(" ", styles.prevArrow);
  return (
    <img
      src={arrowLeft.src}
      className={classes}
      style={{ ...style }}
      onClick={onClick}
    />
  );
};
const Carousel = ({ slides }) => {
  const setting = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 3,
    prevArrow: <PrevtArrow />,
    nextArrow: <NextArrow />,
  };
  const renderSlides = () =>
    slides.map((el) => (
      <>
        <div
          className={styles.slideElement}
          style={{
            backgroundImage: `url(${el.url.src})`
          }}
        ></div>
      </>
    ));

  return (
    <div className={styles.App}>
      <Slider {...setting}>{renderSlides()}</Slider>
    </div>
  );
};

export default Carousel;
