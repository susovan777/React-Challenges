import { useState } from "react";
import TabContent, { DifferentContent } from "./Content";
import Tab from "./Tab";
import content from "../../public/content";

const TabContainer = () => {
  const cardContent = content;

  const [activeTab, setActiveTab] = useState(0);
  return (
    <>
      <div className="tabs">
        <Tab num={0} activeTab={activeTab} clickEvent={setActiveTab} />
        <Tab num={1} activeTab={activeTab} clickEvent={setActiveTab} />
        <Tab num={2} activeTab={activeTab} clickEvent={setActiveTab} />
        <Tab num={3} activeTab={activeTab} clickEvent={setActiveTab} />
      </div>

      {activeTab <= 2 ? (
        <TabContent item={cardContent.at(activeTab)} />
      ) : (
        <DifferentContent />
      )}
    </>
  );
};

export default TabContainer;
