import Link from "next/link";

import styles from "./Logo.module.scss";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <Link href="/" passHref>
        <span className={styles.text}>PLANET 61</span>
      </Link>
    </div>
  );
};

export default Logo;
