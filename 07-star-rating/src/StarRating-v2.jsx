import { useState } from "react";

const starContainer = {
  margin: "4rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  alignItem: "center",
  fontSize: "2.5rem",
};

export default function StarRate({ max = 5 }) {
  const [rate, setRate] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div style={starContainer}>
      <div>
        {[...Array(max)].map((star, i) => {
          return (
            <Star
              key={i}
              className={i <= (rate || hover) ? "on" : "off"}
              clickEvent={() => setRate(i)}
              mouseHoverIn={() => setHover(i)}
              mouseHoverOut={() => setHover(0)}
            />
          );
        })}
      </div>
      <p>Rate: {rate || hover}</p>
    </div>
  );
}

const Star = ({ className, clickEvent, mouseHoverIn, mouseHoverOut }) => {
  return (
    <span
      className={className}
      onClick={clickEvent}
      onMouseEnter={mouseHoverIn}
      onMouseLeave={mouseHoverOut}
    >
      &#9733;
    </span>
  );
};
