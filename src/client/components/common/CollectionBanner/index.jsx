// import Link from "next/link";
import styles from "./CollectionBanner.module.scss";
import ConnectWalletButton from "../ConnectWalletButton";

const CollectionBanner = ({
  bannerText = "",
  // btnText = "",
  textStyles,
  bannerStyles,
  // href
}) => {
  return (
    <>
      <div className={[styles.bannerBlock, bannerStyles].join(" ")}>
        <div className={[styles.contentBlock, textStyles].join(" ")}>
          {bannerText}
        </div>
        {/* <div className={styles.buttonBlock}>
          <div className={styles.yellowBtnBlock}>{btnText}</div>
        </div> */}
        <ConnectWalletButton walletStyles={styles.connectWalletStyles}/>
      </div>
    </>
  );
};
export default CollectionBanner;
