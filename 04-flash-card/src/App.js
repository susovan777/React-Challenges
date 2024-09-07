import { useState } from "react";
import Flashcard from "./Flashcard";

function App() {
  const [selectedId, setSelectedId] = useState(null);

  const handleClick = (id) => {
    // setSelectedId(id);
    // if (id === selectedId) setSelectedId(null);
    setSelectedId(id !== selectedId ? id : null); // shortcut of above 2 lines
  };

  return (
    <div>
      <Flashcard id={selectedId} clickEvent={handleClick} />
    </div>
  );
}

export default App;
