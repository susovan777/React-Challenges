const TabContent = () => {
  return (
    <div className="tab-content">
      <h4>Card Title</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi beatae
        repellat enim labore aliquid aspernatur minus voluptate! Libero quia
        neque exercitationem eligendi? Ratione harum aperiam laborum odio
        voluptatum, atque dolores?
      </p>

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

export default TabContent;
