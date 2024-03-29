import React, { useState, useEffect } from "react";
import Logo from "../Logo";
import Navigation from "../Navigation";
import SocialSection from "./SocialSection";
import styles from "./Header.module.scss";
import ExpandElement from "./ExpandElement";
import HeaderMobile from "./HeaderMobile";
import ConnectWalletButton from "../ConnectWalletButton";
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

  const scrollSmoothTo = (elementId, isMobile) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        block: "start"
      });
    }

    if (isMobile) {
      changeExpand();
    }
  };

  const cls =
    scrollDirection === true ? styles.header_hidden : styles.header_visible;

  const DesktopHeader = () => (
    <header className={classnames(styles.header, cls)}>
      <div className={styles.logoExpandElemBlock}>
        <ExpandElement onClick={changeExpand} />
        <div className={styles.logoContainer}>
          <Logo />
        </div>
      </div>

      <Navigation onClick={scrollSmoothTo} />
      <ConnectWalletButton />

      <div className={styles.socialBtnBlock}>
        <SocialSection />
      </div>
    </header>
  );
  return (
    <>
      <DesktopHeader />
      <HeaderMobile
        toNavigate={scrollSmoothTo}
        isOpen={isExpanded}
        mobile
        onClose={changeExpand}
      />
    </>
  );
};

export default HeaderComponent;
