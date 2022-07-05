import Section from "../common/Section";
import Slider from "./SliderComponent";
import styles from "./AfterMarsColonization.module.scss";
import Carousel from "../common/Carousel";

const SecondSection = () => {
  return (
    <Section>
      <div className={styles.container}>
        <div className={styles.sectionTitle}>
          1000 years after mars colonization
        </div>
        <div className={styles.sectionDescription}>
          The Earth has always been threatened by something... but the
          irrevocably expanding sun has done its job. People were forced to
          explore the endless expanse of space in search of a new home until
          they stumbled upon her.... Be part of the colony and build a new world
          with us
        </div>
        <Carousel />
        <Slider />
      </div>
      <div className={styles.bannerBlock}>
        <div className={styles.contentBlock}>
          1000 years after Mars colonisation. New race comes up with the
          specific climat on Mars. This is limited collection with 2000 NFT.
          Choose your version of Andromeda and be a part of Meta Universe
        </div>
        <div className={styles.buttonBlock}>
          <div className={styles.yellowBtnBlock}>
            CHOOSE ANDROMEDA ON BINANCE
          </div>
        </div>
      </div>
    </Section>
  );
};
export default SecondSection;
