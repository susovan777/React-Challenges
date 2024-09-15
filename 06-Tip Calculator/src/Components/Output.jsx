const Output = ({ billAmount, myFeedback, friendFeedback }) => {
  const myTip = (billAmount * Number(myFeedback)) / 100;
  const friendTip = (billAmount * Number(friendFeedback)) / 100;
  return (
    <h2>
      You pay ₹{billAmount + myTip + friendTip}{" "}
      <span>
        (₹{billAmount} + ₹{myTip + friendTip} tip)
      </span>
    </h2>
  );
};

export default Output;
