import Section from "../common/Section";
import {
  CAccordion,
  CAccordionItem,
  CAccordionHeader,
  CAccordionBody
} from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
import { questionSectionData } from "./questionSectionData";
import downArrow from "../../assets/images/icons/arrow-234.svg";
import style from "./QuestionSection.module.scss";

const vars = {
  "--cui-accordion-btn-bg": "#17263c",
  "--cui-accordion-btn-color": "#fff",
  "--cui-accordion-active-bg": "#17263c",
  "--cui-accordion-btn-icon": `url(${downArrow.src})`,
  "--cui-accordion-btn-active-icon": `url(${downArrow.src})`,
  "--cui-accordion-active-color": "#fff"
};

const QuestionSection = () => {
  return (
    <Section title="QUESTIONS">
      <CAccordion style={vars}>
        {questionSectionData.map(({ question, response }, index) => (
          <CAccordionItem
            itemKey={index}
            className={style.itemStyles}
            key={question}
          >
            <CAccordionHeader>{question}</CAccordionHeader>
            <CAccordionBody>{response}</CAccordionBody>
          </CAccordionItem>
        ))}
      </CAccordion>
    </Section>
  );
};

export default QuestionSection;
