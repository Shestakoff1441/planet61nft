/* eslint-disable react/display-name */
import Image from "next/image";
import Link from "next/link";

import classnames from "classnames";
import styles from "./LinkComponent.module.scss";

const ImageLink = ({ href = "/", image, classes = [] }) => {
  return (
    <div className={classnames(styles.imageElement, classes)}>
      <Link href={href || "/"} passHref>
        <a className={styles.imageWrapper}>
          <Image src={image.src} layout="fill" objectFit="contain" alt="" />
        </a>
      </Link>
    </div>
  );
};
const BasicLink = ({ href = "/", text = "", classes, onClick }) => {
  return (
    <div
      className={classnames([styles.linkElement, classes ? classes : []])}
      onClick={onClick}
    >
      <Link href={href} passHref>
        {text}
      </Link>
    </div>
  );
};
const LinkComponent = (props) => {
  const { image } = props;
  return <>{image ? <ImageLink {...props} /> : <BasicLink {...props} />}</>;
};

export default LinkComponent;
