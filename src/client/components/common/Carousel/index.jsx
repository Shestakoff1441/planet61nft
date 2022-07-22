import styles from "./Carousel.module.scss";

import SwiperCore, { Navigation, EffectCoverflow } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { useState, useEffect } from "react";

SwiperCore.use([Navigation]);

const Carousel = ({ slides, cStyles }) => {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);
  const SwiperButtonNext = () => (
    <span data-test-id="my-btn-next" className={styles.nextBtn} />
  );

  const SwiperButtonPrev = () => (
    <span data-test-id="my-btn-prev" className={styles.prevBtn} />
  );

  return (
    <div className={styles.carouselWrapper}>
      <SwiperButtonPrev />
      <div className={cStyles}>
        {domLoaded && (
          <Swiper
            navigation={{
              nextEl: "[data-test-id=my-btn-next]",
              prevEl: "[data-test-id=my-btn-prev]"
            }}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={2}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true
            }}
            pagination={true}
            modules={[EffectCoverflow, Navigation]}
            className="mySwiper"
            loop
            breakpoints={{
              770: {
                slidesPerView: 2,
                spaceBetween: 50
              },
              1180: {
                slidesPerView: 3,
                spaceBetween: 50
              }
            }}
          >
            {slides.map((el, index) => (
              <SwiperSlide key={`${index}`}>
                <img src={el.url.src} className={styles.slideElement} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
      <SwiperButtonNext />
    </div>
  );
};

export default Carousel;
