import Image from "next/image";
import Link from "next/link";
import classnames from "classnames";
import styles from "./LinkComponent.module.scss";

const ImageLink = ({ href = "/", image, classes, blank }) => {
  return (
    <div className={classnames([styles.imageElement, classes ? classes : []])}>
      <Link href={href || "/"} passHref>
        <a target={blank && "_blank"}>
          <Image src={image.src} layout="fill" objectFit="contain" alt="" />
        </a>
      </Link>
    </div>
  );
};

const NavigationLink = ({ text = "", classes, onClick, id, mobile }) => {
  return (
    <div
      className={classnames([styles.linkElement, classes ? classes : []])}
      onClick={() => onClick(id, mobile)}
    >
      <span>{text}</span>
    </div>
  );
};

const LinkComponent = (props) => {
  const { image } = props;
  return (
    <>{image ? <ImageLink {...props} /> : <NavigationLink {...props} />}</>
  );
};

export default LinkComponent;
