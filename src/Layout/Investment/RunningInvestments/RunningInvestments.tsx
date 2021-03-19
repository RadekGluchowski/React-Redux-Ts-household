import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { InvestmentState } from "../../../Store/Reducers/InvestmentReducer/investment.reducer";
import { AppState } from "../../../Store/Reducers/root-reducer";

export const RunningInvestments = () => {
  const investments = useSelector<AppState, InvestmentState["investments"]>(
    (state) => state.investmentReducer.investments
  );
  console.log(investments);
  return <div></div>;
};

/* 

const Notifications = ({ messages=[], setMessages, delay=1000 }) => {
  const msgs = [...messages];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (msgs.length) {
        msgs.shift();
        setMessages(msgs);
      }
    }, delay);
    return () => clearTimeout(timer);
  }, [messages]);

  return (
    <div>
      {messages.map(msg => <div key={msg}>{msg}</div>)}
    </div>
  );
}

const App = () => {
  const [messages, setMessages] = useState([]);

  const handleNotification = () => {
    const newHash = generateHash();
    const modifiedMessages = [...messages, newHash];
    setMessages(modifiedMessages);
  };

  return (
    <div>
      <Notifications
        messages={messages}
        setMessages={setMessages}
        delay={3000}
      />
      <button onClick={handleNotification}>Click Me</button>
    </div>
  );
}

export default App;
*/
