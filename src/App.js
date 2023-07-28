import React from "react";
import "./App.css";
import Account from "./components/Account";
import Bonus from "./components/Bonus";
import { useSelector } from "react-redux";

function App() {
  const points = useSelector((state) => state.bonus.points);
  const amount = useSelector((state) => state.account.amount);

  return (
    <div className="app">
      <h2>App</h2>
      <p>amount:{amount}</p>
      <p>points:{points}</p>
      {/* to setup the logic whenever amount is incremented over 100 increment points by 1 using extraReducers */}

      <Account />
      <Bonus />
    </div>
  );
}

export default App;
