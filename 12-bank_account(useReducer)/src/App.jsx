import { useReducer } from "react";

const initialState = {
  balance: 0,
  loan: 0,
  isActive: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "openAccount":
      return {
        ...state,
        balance: 500,
        isActive: true,
      };

    case "deposite":
      return {
        ...state,
        balance: state.balance + action.amount,
      };

    case "withdraw":
      return {
        ...state,
        balance: state.balance - action.amount,
      };

    case "requestLoan":
      return {
        ...state,
        balance: state.loan > 0 ? state.balance : state.balance + action.amount,
        loan: state.loan > 0 ? state.loan : action.amount,
      };

    case "payLoan":
      return {
        ...state,
        balance: state.balance - action.amount,
        loan: state.loan - action.amount,
      };

    case "closeAccount":
      return {
        ...initialState,
      };

    default:
      throw new Error("Unknown action");
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleOpenAccount = () => {
    dispatch({ type: "openAccount" });
  };
  const handleDeposite = () => {
    dispatch({ type: "deposite", amount: 150 });
  };
  const handleWithdraw = () => {
    dispatch({ type: "withdraw", amount: 50 });
  };
  const handleRequestLoan = () => {
    dispatch({ type: "requestLoan", amount: 5000 });
  };
  const handlePayLoan = () => {
    dispatch({ type: "payLoan", amount: state.loan });
  };
  const handleCloseAccount = () => {
    if (state.loan > 0) return;
    if (state.balance !== 0) return;

    dispatch({ type: "closeAccount" });
  };

  return (
    <div className="app">
      <h1>useReducer Bank Account</h1>
      <p>Balance: {state.balance}</p>
      <p>Loan: {state.loan}</p>

      <p>
        <button onClick={() => handleOpenAccount()} disabled={state.isActive}>
          Open account
        </button>
      </p>
      <p>
        <button onClick={() => handleDeposite()} disabled={!state.isActive}>
          Deposit 150
        </button>
      </p>
      <p>
        <button onClick={() => handleWithdraw()} disabled={!state.isActive}>
          Withdraw 50
        </button>
      </p>
      <p>
        <button onClick={() => handleRequestLoan()} disabled={!state.isActive}>
          Request a loan of 5000
        </button>
      </p>
      <p>
        <button onClick={() => handlePayLoan()} disabled={!state.isActive}>
          Pay loan
        </button>
      </p>
      <p>
        <button onClick={() => handleCloseAccount()} disabled={!state.isActive}>
          Close account
        </button>
      </p>
    </div>
  );
};

export default App;
