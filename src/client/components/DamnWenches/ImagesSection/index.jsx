import Image from "next/image";
import pinkJ from "../../../assets/images/clothColoboration/pinkJacket.svg";
import purpleJ from "../../../assets/images/clothColoboration/purpleJacket.svg";
import smoke from "../../../assets/images/clothColoboration/smoke.svg";
import lolyPop from "../../../assets/images/clothColoboration/lolyPop.svg";
import styles from "./ImagesSection.module.scss";
import ViewButton from "../../common/ViewButton";

const ImagesSection = () => (
  <div className={styles.clothColloborationBlock}>
    <h3 className={styles.clothTitle}>Cloth colloboration</h3>
    <div className={styles.imagesBlock}>
      <div className={styles.purplekJacket}>
        <Image src={purpleJ} width={300} height={300} alt="" />
        <div className={styles.smoke}>
          <Image src={smoke} width={200} height={200} alt="" />
        </div>
      </div>

      <div className={styles.pinkJacket}>
        <Image src={pinkJ} width={300} height={300} alt="" />
        <div className={styles.lolyPop}>
          <Image src={lolyPop} width={200} height={200} alt="" />
        </div>
      </div>
    </div>
    <ViewButton
      text={"VIEW COLLECTION"}
      href={"/"}
      classes={styles.viewBtn}
    />
  </div>
);
export default ImagesSection;
