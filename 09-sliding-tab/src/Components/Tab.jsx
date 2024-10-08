const Tab = ({ num, activeTab, clickEvent }) => {
  return (
    <button
      className={activeTab === num ? "tab active" : "tab"}
      onClick={clickEvent}
    >
      Tab {num + 1}
    </button>
  );
};

export default Tab;
