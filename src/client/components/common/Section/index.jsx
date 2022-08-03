import classes from "classnames";
import styles from "./Section.module.scss";

const Section = ({
  background: { src } = "",
  title = "",
  bgc,
  children,
  customStyles
}) => {


  return (
    <section
      className={classes(styles.section, customStyles)}
      style={{
        backgroundImage: `url(${src})`,
        backgroundColor: bgc ? bgc : "#180c1dc9"
      }}
    >
      <div className={styles.sectionContainer}>
        {title}
        {children}
      </div>
    </section>
  );
};
export default Section;
