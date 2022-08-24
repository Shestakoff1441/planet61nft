import classes from "classnames";
import styles from "./Section.module.scss";

const Section = ({
  background: { src } = "",
  title = "",
  // bgc,
  children,
  customStyles
}) => {

  return (
    <section
      className={classes(styles.section, customStyles)}
      style={{
        backgroundImage: `url(${src})`,
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
