import Image from "next/image";

import burgerMenu from "../../../../assets/images/burgerMenu.svg";
import styles from "./ExpandElement.module.scss";

const ExpandElement = ({ onClick }) => {
  return (
    <span onClick={onClick} className={styles.expanedElement}>
      <Image src={burgerMenu.src} height={22} width={22} alt="" />
    </span>
  );
};

export default ExpandElement;
