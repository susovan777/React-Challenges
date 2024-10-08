const TabContent = ({ item }) => {
  return (
    <div className="tab-content">
      <h4>{item.summary}</h4>
      <p>{item.details}</p>

      <div className="tab-actions">
        <button>Show Details</button>

        <div className="hearts">
          <span>3 ❤️</span>
          <button>+</button>
          <button>+++</button>
        </div>
      </div>

      <div className="undo-btns">
        <button>Undo</button>
        <button>Undo in 2s</button>
      </div>
    </div>
  );
};

const DifferentContent = () => {
  return (
    <div className="tab-content">
      <h4>I'm a DIFFERENT tab, so I reset state 💣💥</h4>
    </div>
  );
};

export default TabContent;
export { DifferentContent };
