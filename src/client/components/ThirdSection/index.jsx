import Section from "../Section";
import styles from "./ThirdSection.module.scss";
import frida from "../../assets/images/fridaBack.svg";
import NFTelement from "../NFTelement";
import { cartsData } from "./NftCardsData";

const ThirdSection = () => {
  return (
    <Section background={frida} bgc="#120B20">
      <div className={styles.container}>
        <div className={styles.sectionTitle}>DAMN WENCHES</div>
        <div className={styles.sectionDescription}>
          Let&apos;s dive into the world of damn art full of madness
        </div>
        <div className={styles.nftelemsBlock}>
          {cartsData.map((el) => (
            <NFTelement {...el} key={el.name} />
          ))}
        </div>
      </div>
    </Section>
  );
};
export default ThirdSection;
