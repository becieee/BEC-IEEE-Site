import React, { useState } from "react";
import Index from "./Index";
import CountdownTimer from "./components/CountdownTimer/CountdownTimer";

const App = () => {
  const [isLaunched, setIsLaunched] = useState(false);

  const handleLaunch = () => {
    setIsLaunched(true);
  };

  const launchTime = "2024-12-24T19:00:00"; // Change this to your desired launch time

  return isLaunched ? <Index /> : <CountdownTimer launchTime={launchTime} onLaunch={handleLaunch} />;
};

export default App;
