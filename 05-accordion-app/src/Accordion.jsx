import { useState } from "react";
import faqs from "./Faq-Data";

const Accordion = () => {
  return (
    <div className="accordion">
      {faqs.map((el, i) => {
        return (
          <AccordionItem
            key={i + 1}
            point={i + 1}
            title={el.title}
            description={el.text}
            // isExpand={isExpand}
            // clickEvent={expandItem}
          />
        );
      })}
    </div>
  );
};

const AccordionItem = ({ point, title, description }) => {
  const [isExpand, setIsExpand] = useState(false);

  const expandItem = () => {
    setIsExpand((isExpand) => !isExpand);
  };
  return (
    <div className={isExpand ? "item active" : "item"} onClick={expandItem}>
      <h1 className="number">{point < 10 ? `0${point}` : { point }}</h1>
      <h1>{title}</h1>
      <span>{!isExpand ? "+" : "-"}</span>
      {isExpand && <p className="content">{description}</p>}
    </div>
  );
};

export default Accordion;
