import Section from "../common/Section";
import bg from "../../assets/images/bga.svg";
import { roadmapData } from "./roadmapData";
import RoadmapItem from "./RoadmapItem";

const Roadmap = () => (
  <Section title="ROADMAP" background={bg} bgc="#050514">
    <div id="rm">
      {roadmapData.map((el, index) => (
        <RoadmapItem
          key={el.title}
          stage={index + 1}
          reverse={index % 2 !== 0}
          title={el.title}
          goals={el.goals}
          img={el.image}
        />
      ))}
    </div>
  </Section>
);

export default Roadmap;
