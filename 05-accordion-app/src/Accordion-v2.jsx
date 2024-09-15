import { useState } from "react";
import faqs from "./Faq-Data";

const AccordionV2 = () => {
  const [currentOpen, setCurrentOpen] = useState(1);

  const expandItem = (i) => {
    setCurrentOpen(i);
  };

  return (
    <div className="accordion">
      <h2>V2</h2>
      {faqs.map((el, i) => {
        return (
          <AccordionItem
            key={i + 1}
            point={i + 1}
            title={el.title}
            isExpand={currentOpen === i + 1}
            clickEvent={expandItem}
          >
            {el.text}
          </AccordionItem>
        );
      })}
    </div>
  );
};

const AccordionItem = ({ point, title, children, isExpand, clickEvent }) => {
  return (
    <div
      className={isExpand ? "item active" : "item"}
      onClick={() => clickEvent(point)}
    >
      <h1 className="number">{point < 10 ? `0${point}` : { point }}</h1>
      <h1>{title}</h1>
      <span>{!isExpand ? "+" : "-"}</span>
      {isExpand && <p className="content">{children}</p>}
    </div>
  );
};

export default AccordionV2;
