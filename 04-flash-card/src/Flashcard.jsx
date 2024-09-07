import questions from "./Questions";

const Flashcard = ({ id, clickEvent }) => {
  return (
    <div className="flashcards">
      {questions.map((qs) => {
        return (
          <div
            key={qs.id}
            className={qs.id === id ? "selected" : ""}
            onClick={() => clickEvent(qs.id)}
          >
            <p>{qs.id === id ? qs.answer : qs.question}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Flashcard;
