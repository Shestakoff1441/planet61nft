import Section from "../common/Section";
import Slider from "../common/SliderComponent";
import styles from "./AfterMarsColonization.module.scss";
import CollectionBanner from "../common/CollectionBanner";
import cart1 from "../../assets/images/14.png";
import cart2 from "../../assets/images/25.png";
import cart3 from "../../assets/images/38.png";
import cart4 from "../../assets/images/39.png";
import cart5 from "../../assets/images/47.png";
import cart6 from "../../assets/images/54.png";
import cart7 from "../../assets/images/59.png";
import cart8 from "../../assets/images/63.png";
import cart9 from "../../assets/images/85.png";

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
const SecondSection = () => {
  return (
    <Section>
      <div className={styles.container} id="amc">
        <div className={styles.sectionTitle}>
          1000 YEARS AFTER MARS COLONIZATION
        </div>
        <div className={styles.sectionDescription}>
          The Earth has always been threatened by something... but the
          irrevocably expanding sun has done its job. People were forced to
          explore the endless expanse of space in search of a new home until
          they stumbled upon her.... Be part of the colony and build a new world
          with us
        </div>
        <Slider slides={sliderElements}/>
      </div>
      <CollectionBanner
        btnText="CHOOSE ANDROMEDA ON BINANCE"
        bannerText="1000 years after Mars colonization. New race comes up with the specific
        climat on Mars. This is limited collection with 2000 NFT. Choose your
        version of Andromeda and be a part of Meta Universe"
      />
    </Section>
  );
};
export default SecondSection;
