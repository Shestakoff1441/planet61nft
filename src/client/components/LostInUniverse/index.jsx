import Section from "../common/Section";
import Planets from "../../assets/images/lostInUniverse/planets.svg";
import woman from "../../assets/images/lostInUniverse/woman.svg";
import Image from "next/image";
import CollectionBanner from "../common/CollectionBanner";
import styles from "./LostInUniverse.module.scss";
import picture_1 from "../../assets/images/lostInUniverse/picture_1.svg";
import picture_2 from "../../assets/images/lostInUniverse/picture_1.svg";
import picture_3 from "../../assets/images/lostInUniverse/picture_1.svg";
import picture_4 from "../../assets/images/lostInUniverse/picture_1.svg";
import picture_5 from "../../assets/images/lostInUniverse/picture_1.svg";
import Slider from "../common/SliderComponent";

const data = [
  { url: picture_1 },
  { url: picture_2 },
  { url: picture_3 },
  { url: picture_4 },
  { url: picture_5 }
];
const LostInUniverse = () => {
  return (
    <Section background={Planets} bgc="#320933">
      <div className={styles.container} id="liu">
        <div className={styles.title}>LOST IN UNIVERSE</div>
        <div className={styles.pictureDescription}>
          <div className={styles.picture}>
            <Image src={woman} width={350} height={450} alt="" />
          </div>
          <div className={styles.description}>
            This collection is the result of a passion for space and art.
            Inspired by the theme of space exploration and human attempts to
            bring life beyond the boundaries of planet Earth, Kim goes into
            space on an adventure. But her spaceship crashed, and now she is
            forced to wander the galaxy in search of friends and a new home.
          </div>
        </div>
        <Slider slides={data} />
        <CollectionBanner
          btnText="VIEW ON OPENSEA"
          bannerText="This is limited collection of 2000NFT. Book NFT beforelaes start on spetial price"
        />
      </div>
    </Section>
  );
};

export default LostInUniverse;
