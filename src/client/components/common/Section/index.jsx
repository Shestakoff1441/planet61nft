import classes from "classnames";
import styles from "./Section.module.scss";

const getHeader = (content, size) => {
  return [
    <h1>{content}</h1>,
    <h2>{content}</h2>,
    <h3>{content}</h3>,
    <h4>{content}</h4>,
    <h5>{content}</h5>,
    <h6>{content}</h6>
  ][size];
};

const Section = ({
  background: { src } = "",
  title = "",
  titleSize = 2,
  bgc,
  children,
  customStyles
}) => {
  const text = getHeader(title, titleSize);

  return (
    <section
      className={classes(styles.section, customStyles)}
      style={{
        backgroundImage: `url(${src})`,
        backgroundColor: bgc ? bgc : "#1A213A"
      }}
    >
      <div className={styles.sectionContainer}>
        {title ? text : null}
        {children}
      </div>
    </section>
  );
};
export default Section;
