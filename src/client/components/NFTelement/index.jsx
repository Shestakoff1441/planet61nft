import LinkComponent from "../LinkComponent";
import styles from "./NFTelement.module.scss";

const NFTElement = ({
  name = "",
  text = "",
  image = "",
  href = "/",
  buttonText = ""
}) => {
  return (
    <div className={styles.container}>
      <div
        className={styles.imageBlock}
        style={{ backgroundImage: `url(${image.src})` }}
      ></div>
      <div className={styles.infoBlock}>
        <span className={styles.name}>{name}</span>
        <div className={styles.description}>{text}</div>
      </div>
      <LinkComponent text={buttonText} href={href} classes={styles.linkTo} />
    </div>
  );
};

export default NFTElement;
