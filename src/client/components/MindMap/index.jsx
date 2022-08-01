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
  };

  return (
    <Section bgc="#000">
      <div className={styles.mindMapContainer} id="mm">
        <div className={styles.MindMapTitle}>MINDMAP</div>
        <div className={styles.MindMapDescription}>
          Planet61 is a project born out of love for space, technology and art.
          We are watching with curiosity and awe the desire of man to master the
          Cosmos. We are constantly developing in the field of information
          technology. We are inspired by art in its physical, abstract and
          digital forms. However, the main goal of our project is the formation
          and development of a conscious community that shares our interests in
          striving to do something meaningful for planet Earth.
        </div>
        {!activeSection.description && (
          <div className={styles.mindMapItems}>
            {Object.keys(sections).map((section) => (
              <div
                className={styles.mindMapElement}
                key={section}
                onClick={() => setSectionDescription(sections[section])}
              >
                <div
                  style={{
                    backgroundImage: `url(${sections[section].background})`
                  }}
                  className={classnames(
                    styles[section],
                    styles.backgroundStyles
                  )}
                ></div>
                <span>{sections[section].title}</span>
              </div>
            ))}
          </div>
        )}
        {activeSection.description && (
          <>
            <div className={styles.sectionDescription}>
              <span
                className={styles.closeDescriptionSection}
                onClick={() => setSectionDescription(initilActiveSectionValue)}
              >
                <img src={close.src} alt="close" />
              </span>
              <div className={styles.descriptionTitle}>
                {activeSection.title}
              </div>
              <div
                className={styles.descriptionDescribe}
                dangerouslySetInnerHTML={{
                  __html: activeSection.description.toLocaleLowerCase()
                }}
              ></div>
            </div>
          </>
        )}
      </div>
    </Section>
  );
};
export default MindMap;
