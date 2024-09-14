import faqs from "./Faq-Data";

const Accordion = () => {
  return (
    <div className="accordion">
      <AccordionItem point="01" title="Where are these chairs assembled?" />
      <AccordionItem
        point="02"
        title="How long do I have to return my chair?"
      />
    </div>
  );
};

const AccordionItem = ({ point, title, description }) => {
  return (
    <div className="item">
      <h1>{point}</h1>
      <h1>{title}</h1>
      <span>+</span>
    </div>
  );
};

export default Accordion;
