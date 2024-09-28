import { useState } from "react";

const App = () => {
  return (
    <div className="app">
      <h1>Text Expander</h1>
      <TextExpander>
        Space travel is the ultimate adventure! Imagine soaring past the stars
        and exploring new worlds. It's the stuff of dreams and science
        fiction,but believe it or not, space travel is a real thing. Humans and
        robots are constantly venturing out into the cosmos to uncover its
        secrets and push the boundaries of what's possible.
      </TextExpander>

      <TextExpander
        expandText="Show Text"
        collapsText="Hide Text"
        buttonColor="#e09509"
      >
        Space travel requires some seriously amazing technology and
        collaboration between countries, private companies, and international
        space organizations. And while it's "not always easy (or cheap), the
        results are out of this world. Think about the first time humans stepped
        foot on the moon or when rovers were sent to roam around on Mars.
      </TextExpander>

      <TextExpander className="box" expanded="true">
        Space missions have given us incredible insights into our universe and
        have inspired future generations to keep reaching for the stars. Space
        travel is a pretty cool thing to think about. Who knows what we'll
        discover next!
      </TextExpander>
    </div>
  );
};

export default App;

const TextExpander = ({
  children,
  className = "",
  expanded = false,
  expandText = "Show More",
  collapsText = "Show Less",
  buttonColor = "blue",
}) => {
  const [isFull, setIsFull] = useState(expanded);

  const beforeExpand = children.split(" ").slice(0, 10).join(" ");
  const displayText = isFull ? children : `${beforeExpand}...`;

  const handleExpand = () => {
    setIsFull((prev) => !prev);
  };

  return (
    <div className={className}>
      <p>
        {displayText}
        <button
          style={{ color: buttonColor }}
          className="button"
          onClick={handleExpand}
        >
          {isFull ? collapsText : expandText}
        </button>
      </p>
    </div>
  );
};

/* 
/////////////////  DATA  ////////////////

        Space travel is the ultimate adventure! Imagine soaring past the stars
        and exploring new worlds. It's the stuff of dreams and science fiction,
        but believe it or not, space travel is a real thing. Humans and robots
        are constantly venturing out into the cosmos to uncover its secrets and
        push the boundaries of what's possible.

        Space travel requires some seriously amazing technology and
        collaboration between countries, private companies, and international
        space organizations. And while it's not always easy (or cheap), the
        results are out of this world. Think about the first time humans stepped
        foot on the moon or when rovers were sent to roam around on Mars.

        Space missions have given us incredible insights into our universe and
        have inspired future generations to keep reaching for the stars. Space
        travel is a pretty cool thing to think about. Who knows what we'll
        discover next!

*/
