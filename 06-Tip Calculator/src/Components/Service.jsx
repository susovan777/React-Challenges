const Service = ({ children, serviceName, servicePercent, setServicePercent }) => {
  return (
    <div className="item">
      {children}{" "}
      <select name={serviceName} value={servicePercent} onChange={setServicePercent}>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was Okay (5%)</option>
        <option value="10">It was Good (10%)</option>
        <option value="20">Absolutely Amazing! (20%)</option>
      </select>
    </div>
  );
};

export default Service;
