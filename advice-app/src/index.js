import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

/* 🚩🚩
// React v18
const root = ReactDOM.createElement(document.getElementById("root"));
root.render(<App />);

// before v18
React.render(<App />);
*/

/* 
  👉 Strict Mode enables the following checks in development:
      - Your components will re-render an extra time to find bugs caused by impure rendering.
      - Your components will re-run Effects an extra time to find bugs caused by missing Effect cleanup.
      - Your components will be checked for usage of deprecated APIs.
*/

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
