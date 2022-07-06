import Link from "next/link";
import styles from "./CollectionBanner.module.scss";

const CollectionBanner = ({
  bannerText = "",
  btnText = "",
  textStyles,
  bannerStyles,
  href
}) => {
  return (
    <Link href={href} passHref>
      <div className={[styles.bannerBlock, bannerStyles].join(" ")}>
        <div className={[styles.contentBlock, textStyles].join(" ")}>
          {bannerText}
        </div>
        <div className={styles.buttonBlock}>
          <div className={styles.yellowBtnBlock}>{btnText}</div>
        </div>
      </div>
    </Link>
  );
};
export default CollectionBanner;
