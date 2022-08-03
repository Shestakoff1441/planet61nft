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
import ViewButton from "../common/ViewButton";
import RoundEarth from "../RoundPlanets";

const sliderElements = [
  { url: cart3 },
  { url: cart4 },
  { url: cart1 },
  { url: cart5 },
  { url: cart6 },
  { url: cart2 }
];


const SecondSection = () => {
  return (
    <Section title="ANDROMEDA">
      <div className={styles.container} id="amc">
        {/* <div className={styles.sectionDescription}>
          The Earth has always been threatened by something... but the
          irrevocably expanding sun has done its job. People were forced to
          explore the endless expanse of space in search of a new home until
          they stumbled upon her.... Be part of the colony and build a new world
          with us
        </div> */}
        <div className={styles.viewBtnContainer}>
          <ViewButton text="VIEW COLLECTION" classes={styles.viewBtn} />
        </div>

        <Carousel slides={sliderElements} cStyles={styles.carouselContainer} />
        <div className={styles.mobilePictureBlock}>
          <img
            className={styles.picture}
            src={cart1.src}
            alt=""
            layout="fill"
          />

          <img
            className={styles.picture}
            src={cart2.src}
            alt=""
            layout="fill"
          />

          <img
            className={styles.picture}
            src={cart3.src}
            alt=""
            layout="fill"
          />
        </div>
      </div>
      <CollectionBanner
        href="https://www.binance.com/fr/nft/profile/planet61-3949254e9009569f223e41a9c530aef2"
        btnText="CHOOSE ANDROMEDA"
        bannerText="1000 years after Mars colonisation. New race comes up with the specific climat
        on Mars. This is limited collection with 2000 NFT. Choose your version of Andromeda and be 
        a part of Meta Universe"
      />
      <RoundEarth />
    </Section>
  );
};
export default SecondSection;
