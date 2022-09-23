import { useEffect, useState } from "react";
import Section from "../common/Section";
import styles from "./AfterMarsColonization.module.scss";
import CollectionBanner from "../common/CollectionBanner";
import cart1 from "../../assets/images/14.png";
import cart2 from "../../assets/images/25.png";
import cart3 from "../../assets/images/38.png";
import cart4 from "../../assets/images/39.png";
import cart5 from "../../assets/images/47.png";
import cart6 from "../../assets/images/54.png";
import Carousel from "../common/Carousel";
import RoundedPlanets from "../RoundPlanets";

const sliderElements = [
  { url: cart3 },
  { url: cart4 },
  { url: cart1 },
  { url: cart5 },
  { url: cart6 },
  { url: cart2 }
];

const AfterMarsCollonization = () => {
  const [currentPicture, setCurrentPicture] = useState("");
  // const [isRenderSlider, setIsRenderSlider] = useState(false);
  useEffect(() => {
    // setIsRenderSlider(true);
    let number = 0;
    const interval = setInterval(() => {
      number++;
      if (number % sliderElements.length === 0) number = 0;
      setCurrentPicture(sliderElements[number].url.src);
    }, 700);
    return () => clearInterval(interval);
  }, []);

  return (
    <Section title="ANDROMEDA" id="amc">
      <div className={styles.container}>
        {/* {isRenderSlider && ( */}
        <Carousel slides={sliderElements} cStyles={styles.carouselContainer} />
        {/* )} */}

        <img
          className={styles.picture}
          src={currentPicture}
          alt=""
          layout="fill"
        />
      </div>

      <RoundedPlanets />
      <CollectionBanner
        href="https://www.binance.com/fr/nft/profile/planet61-3949254e9009569f223e41a9c530aef2"
        btnText="CHOOSE ANDROMEDA"
        bannerText="This is limited collection of 2061 NFT. 
          We represent what will the new race look like. How has the human being evolved over 8000 
          years in the process of adapting life under the influence of radiation, weak gravity, lack of oxygen?  
          We represent new race - ANDROMEDA."
      />
    </Section>
  );
};
export default AfterMarsCollonization;
