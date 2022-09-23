import classnames from "classnames";
import { useState } from "react";
import Section from "../common/Section";
import { sections } from "./mindMapSections";
import close from "../../assets/images/close.svg";
import styles from "./MindMap.module.scss";

const MindMap = () => {
  const initilActiveSectionValue = {
    title: "",
    description: ""
  };
  const [activeSection, setActiveSection] = useState(initilActiveSectionValue);

  const setSectionDescription = (section) => {
    setActiveSection(section);
    // setTimeout(() => {
    //   const getSection = document.getElementById("mm");
    //   if (getSection) {
    //     getSection.scrollIntoView("alignToTop");
    //   }
    // }, 0);
  };

  return (
    <Section
      title="MINDMAP"
      bgc="rgb(22 10 21)"
      customStyles={styles.mindmapSectionPadd}
      id="mm"
    >
      <div className={styles.mindMapContainer}>
        {/* <div className={styles.MindMapTitle}>MINDMAP</div> */}
        <div className={styles.MindMapDescription}>
          Planet61 is a project born out of love for space, technology and art.
          We are constantly growing in the field of technologies. We are
          inspired by art in its physical, abstract and digital forms. However,
          the main goal of our project is the formation and development of a
          conscious community that shares our interests in striving to do
          something meaningful for the planet Earth.
        </div>

        <div className={styles.mindMapItems}>
          {Object.keys(sections).map((section) => (
            <div
              style={{ opacity: activeSection.description ? 0 : 1 }}
              className={styles.mindMapElement}
              key={section}
              onClick={() => setSectionDescription(sections[section])}
            >
              <img
                src={sections[section].background}
                className={classnames(
                  // styles[section],
                  styles.mindmapImage
                )}
              />
              <span>{sections[section].title}</span>
            </div>
          ))}

          {activeSection.description && (
            <>
              <div
                className={styles.sectionDescription}
                id={activeSection.title}
                // style={{
                //   backgroundImage: `url(${activeSection.background})`,
                //   backgroundSize: "cover",
                //   filter: "grayscale(85%)"
                // }}
              >
                <span
                  className={styles.closeDescriptionSection}
                  onClick={() =>
                    setSectionDescription(initilActiveSectionValue)
                  }
                >
                  <img src={close.src} alt="close" />
                </span>
                <div className={styles.descriptionTitle}>
                  {activeSection.title}
                </div>
                <div
                  className={styles.descriptionDescribe}
                  dangerouslySetInnerHTML={{
                    __html: activeSection.description
                  }}
                ></div>
              </div>
            </>
          )}
        </div>
      </div>
    </Section>
  );
};
export default MindMap;
