import { useState } from "react";

const App = () => {
  const [isFull, setIsFull] = useState(false);

  const handleExpand = () => {
    setIsFull((prev) => !prev);
  };
  return (
    <div className="app">
      <h1>Text Expander</h1>
      <TextExpander>
        Space travel is the ultimate adventure! Imagine soaring past the stars
        and
        {isFull
          ? " exploring new worlds. It's the stuff of dreams and science fiction,but believe it or not, space travel is a real thing. Humans and robots are constantly venturing out into the cosmos to uncover its secrets and push the boundaries of what's possible."
          : "..."}{" "}
        <Button
          text={isFull ? "Show Less" : "Show More"}
          clickEvent={handleExpand}
        />
      </TextExpander>

      <TextExpander>
        Space travel requires some seriously amazing technology and
        collaboration between countries, private companies, and international
        space organizations. And while it's
        {isFull
          ? "not always easy (or cheap), the results are out of this world. Think about the first time humans stepped foot on the moon or when rovers were sent to roam around on Mars."
          : "..."}{" "}
        <Button
          text={isFull ? "Hide Text" : "Show Text"}
          clickEvent={handleExpand}
          color="#f2911b"
        />
      </TextExpander>

      <TextExpander className="box">
        Space missions have given us incredible insights into our universe
        {isFull
          ? " and have inspired future generations to keep reaching for the stars. Space travel is a pretty cool thing to think about. Who knows what we'll discover next!"
          : "..."}
        <Button
          text={isFull ? "Show Less" : "Show More"}
          clickEvent={handleExpand}
        />
      </TextExpander>
    </div>
  );
};

export default App;

const TextExpander = ({ children, className = "" }) => {
  return (
    <div className={className}>
      <p>{children}</p>
    </div>
  );
};

const Button = ({ text, clickEvent, color = "blue" }) => {
  const buttonStyle = {
    background: "none",
    border: "none",
    fontSize: "0.9rem",
    color: color,
    cursor: "pointer",
  };

  return (
    <button style={buttonStyle} onClick={clickEvent}>
      {text}
    </button>
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
