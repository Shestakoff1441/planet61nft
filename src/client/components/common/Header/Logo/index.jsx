import Link from "next/link";
import logo from "../../../../assets/images/Logo.svg"
import styles from "./Logo.module.scss";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <Link href="/" passHref>
        <img src={logo.src} alt=""/>
      </Link>
    </div>
  );
};

export default Logo;
