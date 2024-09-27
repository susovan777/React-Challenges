import StarRating from "./StarRating";
import StarRate from "./StarRating-v2";
import "./style.css";

function App() {
  return (
    <>
      <h1>Star Rating</h1>
      <StarRating
        count={5}
        message={["Terrible", "Okay", "Good", "Nice", "Amazing"]}
      />
      <StarRating
        count={10}
        color="blue"
        fontSize={20}
        message={["Terrible", "Okay", "Good", "Nice", "Amazing"]}
      />
      <hr />
      <StarRate max={10} />
    </>
  );
}

export default App;
