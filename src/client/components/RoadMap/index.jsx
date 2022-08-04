import Section from "../common/Section";
import frida from "../../assets/images/frida.svg";
import { roadmapData } from "./roadmapData";
import classnames from "classnames";
import styles from "./Roadmap.module.scss";

const RoadmapItem = ({ reverse, title, goals, stage, img }) => (
  <div
    className={classnames(styles.roadmapItem, {
      [styles.reverse]: reverse
    })}
  >
    <div className={styles.numberOfStage}>{stage}</div>
    <div className={styles.stageLineLeft} />
    <div className={styles.stageLineRight} />
    <div
      className={classnames(styles.roadMapBlockContent, {
        [styles.reverseBlock]: reverse
      })}
    >
      <div
        className={classnames(styles.infoRoadmapStep, {
          [styles.infoRoadmapStepReverse]: reverse
        })}
      >
        <div className={styles.stagePhase}>{title}</div>
        <div className={styles.stageDescription}>
          {goals.map((goal) => (
            <div className={styles.goalBlock}>
              <div className={styles.whitecircle} />
              <span className={styles.stageGoal}>{goal}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className={styles.pictureBlock}>
      <img src={img} alt="" />
    </div>
  </div>
);

const Roadmap = () => {
  return (
    <Section title="ROADMAP" background={frida}>
      <div className={styles.roadmapContainer}>
        {roadmapData.map((el, index) => {
          return (
            <RoadmapItem
              stage={index + 1}
              reverse={index % 2 !== 0}
              title={el.title}
              goals={el.goals}
              img={el.image}
            />
          );
        })}
      </div>
    </Section>
  );
};

export default Roadmap;
