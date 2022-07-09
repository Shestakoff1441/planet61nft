// import LinkComponent from "../../common/LinkComponent";
import ViewButton from "../../common/ViewButton";
import styles from "./NFTelement.module.scss";
ViewButton;

const NFTElement = ({
  name = "",
  text = "",
  image = "",
  href = "/",
  buttonText = ""
}) => {
  return (
    <div className={styles.container}>
      <img src={image.src} alt="" className={styles.image} />
      <div className={styles.infoBlock}>
        <span className={styles.name}>{name}</span>
        <div className={styles.description}>{text}</div>
      </div>

      <ViewButton text={buttonText} href={href} classes={styles.viewBtnStyle}/>
    </div>
  );
};

export default NFTElement;
