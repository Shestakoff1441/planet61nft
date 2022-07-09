import Image from "next/image";
import Link from "next/link";

import classnames from "classnames";
import styles from "./LinkComponent.module.scss";

const ImageLink = ({ href = "/", image, classes }) => {
  return (
    <div className={classnames([styles.imageElement, classes ? classes : []])}>
      <Link href={href || "/"} passHref>
        <Image src={image.src} layout="fill" objectFit="contain" alt="" />
      </Link>
    </div>
  );
};
const BasicLink = ({ href = "/", text = "", classes }) => {
  return (
    <div className={classnames([styles.linkElement, classes ? classes : []])}>
      <Link href={href}>{text}</Link>
    </div>
  );
};
const LinkComponent = (props) => {
  const { image } = props;
  return <>{image ? <ImageLink {...props} /> : <BasicLink {...props} />}</>;
};

export default LinkComponent;
