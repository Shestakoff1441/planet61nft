import Link from "next/link";
import logo from "../../../assets/images/newLogo.png";
import styles from "./Logo.module.scss";

const Logo = ({ size = 42 }) => {
  return (
    <div className={styles.logo}>
      <Link href="/" passHref>
        <img src={logo.src} alt="" height={size} width={size} />
      </Link>
    </div>
  );
};

export default Logo;
