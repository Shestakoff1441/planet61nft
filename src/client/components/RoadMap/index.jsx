import Section from "../common/Section";
import frida from "../../assets/images/frida.svg";
import { roadmapData } from "./roadmapData";
import RoadmapItem from "./RoadmapItem";


const Roadmap = () => {
  return (
    <Section title="ROADMAP" background={frida} bgc="#050514">
      <div>
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
