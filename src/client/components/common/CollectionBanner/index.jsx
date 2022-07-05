import styles from "./CollectionBanner.module.scss";
const CollectionBanner = ({ bannerText = "", btnText = "" }) => {
  return (
    <div className={styles.bannerBlock}>
      <div className={styles.contentBlock}>{bannerText}</div>
      <div className={styles.buttonBlock}>
        <div className={styles.yellowBtnBlock}>{btnText}</div>
      </div>
    </div>
  );
};
export default CollectionBanner;
