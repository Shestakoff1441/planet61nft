import Image from "next/image";
import React from "react";
import styles from "./HeaderMobile.module.scss";
import close from "../../../../assets/images/close.svg";
import classNames from "classnames";
import Navigation from "../../Navigation";
import SocialSection from "../SocialSection";

const HeaderMobile = ({ toNavigate, isOpen, mobile, onClose }) => {
  return (
    <div className={styles.mobileHeaderContainer}>
      <div
        className={classNames(styles.navigationMenu, {
          [styles.visible]: isOpen
        })}
      >
        <div className={styles.mobileHeaderClose}>
          <span onClick={onClose} className={styles.closeBtn}>
            <Image src={close.src} height={20} width={20} alt="" />
          </span>
        </div>
        <Navigation
          mobile={mobile}
          onClick={toNavigate}
          containerStyles={styles.navBlockStyles}
          linkStyles={styles.navLinkStyles}
        />
        <SocialSection classes={styles.socialSectionStyles} />
      </div>
    </div>
  );
};

export default HeaderMobile;
