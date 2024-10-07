import TabContent from "./Content";
import Tab from "./Tab";

const TabContainer = () => {
  return (
    <>
      <div className="tabs">
        <Tab />
        <Tab />
        <Tab />
      </div>

      <TabContent />
    </>
  );
};

export default TabContainer;
