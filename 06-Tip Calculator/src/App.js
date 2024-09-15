import { useState } from "react";
import Output from "./Components/Output";
import Bill from "./Components/BillInput";
import Service from "./Components/Service";
import "./styles.css";

export default function App() {
  const [billAmount, setBillAmount] = useState("");
  const [service, setService] = useState({
    myFeedback: "",
    friendFeedback: "",
  });

  const handleBillInput = (e) => {
    setBillAmount(+e.target.value);
  };

  const handleService = (e) => {
    setService({
      ...service,
      [e.target.name]: e.target.value,
    });
  };
  // console.log(billAmount, myFeedbackPercent, friendFeedbackPercent);

  const handleReset = () => {
    setBillAmount("");
    setService({
      myFeedback: "",
      friendFeedback: "",
    });
  };

  return (
    <div>
      <h1>💰Tip Calculator</h1>
      <Bill billAmount={billAmount} setBillAmount={handleBillInput} />
      <Service
        serviceName="myFeedback"
        servicePercent={service.myFeedback}
        setServicePercent={handleService}
      >
        How did you like the service?
      </Service>
      <Service
        serviceName="friendFeedback"
        servicePercent={service.friendFeedback}
        setServicePercent={handleService}
      >
        How did your friend like the service?
      </Service>
      {billAmount && (
        <>
          <Output
            billAmount={billAmount}
            myFeedback={service.myFeedback}
            friendFeedback={service.friendFeedback}
          />
          <button onClick={handleReset}>Reset</button>
        </>
      )}
    </div>
  );
}
