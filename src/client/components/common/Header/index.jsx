import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import SocialSection from "./SocialSection";
import styles from "./Header.module.scss";
import ExpandElement from "./ExpandElement";
import HeaderMobile from "./HeaderMobile";
import classnames from "classnames";

const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState(null);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const isUpperScroll = scrollY > lastScrollY ? true : false;
      if (
        isUpperScroll !== scrollDirection &&
        (scrollY - lastScrollY > 5 || scrollY - lastScrollY < -5)
      ) {
        setScrollDirection(isUpperScroll);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection);
    return () => {
      window.removeEventListener("scroll", updateScrollDirection);
    };
  }, [scrollDirection]);

  return scrollDirection;
};

const HeaderComponent = () => {
  const [isExpanded, setExpanded] = useState(false);
  const changeExpand = () => setExpanded(() => !isExpanded);
  const scrollDirection = useScrollDirection();

  const cls =
    scrollDirection === true ? styles.header_hidden : styles.header_visible;

  const DesktopHeader = () => (
    <header className={classnames(styles.header, cls)}>
      <div className={styles.logoExpandElemBlock}>
        <ExpandElement onClick={changeExpand} isExpanded={isExpanded} />
        <Logo />
      </div>
      <Navigation />
      <div className={styles.socialBtnBlock}>
        <SocialSection />
      </div>
    </header>
  );

  return (
    <>
      {/* {process.env.WEBSITE_TITLE} */}
      <DesktopHeader />
      <HeaderMobile onClose={changeExpand} isOpen={isExpanded} />
    </>
  );
};

export default HeaderComponent;
