import styles from "./Carousel.module.scss";

import SwiperCore, { EffectCoverflow, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

SwiperCore.use([Autoplay]);

const Carousel = ({ slides, cStyles }) => {
  return (
    <div className={styles.carouselWrapper}>
      {/* <SwiperButtonPrev /> */}
      <div className={cStyles}>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          speed={1200}
          slidesPerView={2}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          spaceBetween={10}
          coverflowEffect={{
            rotate: 100,
            stretch: 0,
            depth: 10,
            modifier: 2,
            slideShadows: true
          }}
          modules={[Autoplay, EffectCoverflow]}
          className="mySwiper"
          loop
        >
          {slides.map((el, index) => (
            <SwiperSlide key={`${index}`}>
              <img src={el.url.src} className={styles.slideElement} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* <SwiperButtonNext /> */}
    </div>
  );
};

export default Carousel;
