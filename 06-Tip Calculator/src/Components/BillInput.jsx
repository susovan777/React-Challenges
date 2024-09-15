const Bill = ({ billAmount, setBillAmount }) => {
  return (
    <div>
      How much was the bill?{" "}
      <input
        type="text"
        name="bill"
        value={billAmount}
        onChange={setBillAmount}
        placeholder="Bill amount"
      />
    </div>
  );
};

export default Bill;
