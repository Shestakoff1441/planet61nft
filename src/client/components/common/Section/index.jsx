import classes from "classnames";
import styles from "./Section.module.scss";

const Section = ({
  background: { src } = "",
  title = "",
  id,
  children,
  customStyles
}) => {
  return (
    <section
      id={id}
      className={classes(styles.section, customStyles)}
      style={{
        backgroundImage: `url(${src})`
        // backgroundColor: bgc ? bgc : "#0D0202"
      }}
    >
      <div className={styles.sectionContainer}>
        <div className={styles.sectionTitle}>{title}</div>
        {children}
      </div>
    </section>
  );
};
export default Section;
