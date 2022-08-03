import Section from "../common/Section";
import styles from "./Roadmap.module.scss";

import frida from "../../assets/images/frida.svg";
import classnames from "classnames";

const WithRightBorder = () => (
  <div className={classnames(styles.rightBorderBlock)}>
    <div className={styles.stageTitles}>
      <div className={styles.stageNumber}>Stage1</div>
      <div className={styles.stageName}>Mint</div>
    </div>
    <ul className={styles.goalsList}>
      <li>1</li>
      <li>2</li>
    </ul>
  </div>
);

const WithLeftBorder = () => (
  <div className={classnames(styles.leftBorderBlock)}>
    <div className={styles.stageTitles}>
      <div className={styles.stageNumber}>Stage1</div>
      <div className={styles.stageName}>Mint</div>
    </div>
    <ul className={styles.goalsList}>
      <li>1</li>
      <li>2</li>
    </ul>
  </div>
);

const EmptyBlock = () => <div className={styles.emtyBlock}>hello</div>;

const data = [
  { title: "hey", type: "right" },
  { title: "" },
  { title: "" },
  { title: "hey", type: "left" }
];

const RoadmapBlock = {
  right: WithRightBorder,
  left: WithLeftBorder
};
const Roadmap = () => {
  return (
    <Section title="ROADMAP" background={frida}>
      <div className={styles.roadmapContainer}>
        {data.map((el, index) => {
          const RoadmapComponent = RoadmapBlock[el.type];
          return el.title ? <RoadmapComponent /> : <EmptyBlock />;
        })}
      </div>
    </Section>
  );
};

export default Roadmap;
