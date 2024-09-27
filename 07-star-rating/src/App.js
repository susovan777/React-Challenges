import StarRating from "./StarRating";
import StarRate from "./StarRating-v2";
import "./style.css";

function App() {
  return (
    <>
      <h1>Star Rating</h1>
      <StarRating count={10} />
      <hr />
      <StarRate max={10} />
    </>
  );
}

export default App;
