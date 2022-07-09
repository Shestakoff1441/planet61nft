import Image from "next/image";
import React from "react";
import styles from "./HeaderMobile.module.scss";
import close from "../../../../assets/images/close.svg";
import classNames from "classnames";
import Navigation from "../Navigation";

const HeaderMobile = ({ onClose, isOpen }) => {
  return (
    <div className={styles.mobileHeaderContainer}>
      <div
        className={classNames(styles.navigationMenu, {
          [styles.visible]: isOpen
        })}
      >
        <div className={styles.mobileHeaderClose}>
          <span onClick={onClose} className={styles.closeBtn}>
            <Image src={close.src} height={22} width={22} alt="" />
          </span>
        </div>
        <Navigation
          containerStyles={styles.navBlockStyles}
          linkStyles={styles.navLinkStyles}
        />
      </div>
    </div>
  );
};

export default HeaderMobile;
