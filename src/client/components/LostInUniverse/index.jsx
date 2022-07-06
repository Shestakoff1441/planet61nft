import Section from "../common/Section";
import Planets from "../../assets/images/lostInUniverse/planets.svg";
import woman from "../../assets/images/lostInUniverse/woman.svg";
import Image from "next/image";
import CollectionBanner from "../common/CollectionBanner";
import styles from "./LostInUniverse.module.scss";
import picture_1 from "../../assets/images/lostInUniverse/7.png";
import picture_2 from "../../assets/images/lostInUniverse/18.png";
import picture_3 from "../../assets/images/lostInUniverse/24.png";
import picture_4 from "../../assets/images/lostInUniverse/28.png";
import picture_5 from "../../assets/images/lostInUniverse/61.png";
import Carousel from "../common/Carousel";

const data = [
  { url: picture_4 },
  { url: picture_3 },
  { url: picture_1 },
  { url: picture_2 },

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
            <div className={styles.descriptionText}>
              This collection is the result of a passion for space and art.
              <br />
              <br />
              Inspired by the theme of space exploration and human attempts to
              bring life beyond the boundaries of planet Earth, Kim goes into
              space on an adventure. But her spaceship crashed, and now she is
              forced to wander the galaxy in search of friends and a new home.
            </div>
          </div>
        </div>
        <div className={styles.carouselContainer}>
          <Carousel slides={data} />
        </div>

        <CollectionBanner
          href="https://www.binance.com/fr/nft/profile/planet61-3949254e9009569f223e41a9c530aef2"
          textStyles={styles.bannerText}
          bannerStyles={styles.bannerStyles}
          btnText="VIEW COLLECTION"
          bannerText="This is limited collection of 2000NFT. Book NFT beforelaes start on spetial price"
        />
      </div>
    </Section>
  );
};

export default LostInUniverse;
