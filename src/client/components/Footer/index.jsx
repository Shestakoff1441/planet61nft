import styles from "./Footer.module.scss";
import Logo from "../common/Logo";

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footerLineLogoContainer}>
      <div className={styles.LineContainer}>
        <div className={styles.Line} />
      </div>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.LineContainer}>
        <div className={styles.Line} />
      </div>
    </div>
    <span className={styles.copyrightText}>
      Copyright © {new Date().getFullYear()} Planet61 All rights reserved
    </span>
  </footer>
);

export default Footer;
