
import classnames from "classnames";
import styles from "./RoadmapItem.module.scss";

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

export default RoadmapItem;
