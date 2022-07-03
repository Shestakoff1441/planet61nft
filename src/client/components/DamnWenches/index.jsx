import Section from "../common/Section";
import frida from "../../assets/images/fridaBack.svg";
import NFTelement from "./NFTelement";
import { cartsData } from "./NftCardsData";
import ImagesSection from "./ImagesSection";
import styles from "./DamnWenches.module.scss";

const DamnWenches = () => (
  <Section background={frida} bgc="#120B20">
    <div className={styles.container} id="dw">
      <div className={styles.sectionTitle}>DAMN WENCHES</div>
      <div className={styles.sectionDescription}>
        Let&apos;s dive into the world of damn art full of madness
      </div>
      <div className={styles.nftelemsBlock}>
        {cartsData.map((el) => (
          <NFTelement {...el} key={el.name} />
        ))}
      </div>
      <ImagesSection />
    </div>
  </Section>
);

export default DamnWenches;
