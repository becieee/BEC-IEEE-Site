import React, { useState, useEffect } from "react";

const CountdownTimer = ({ launchTime, onLaunch }) => {
  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft());

  function calculateTimeLeft() {
    const now = new Date();
    const timeDifference = new Date(launchTime) - now;

    if (timeDifference <= 0) {
      onLaunch(); // Trigger the callback when time reaches
      return null;
    }

    const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
    const seconds = Math.floor((timeDifference / 1000) % 60);

    return { hours, minutes, seconds };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // Cleanup the interval
  }, []);

  if (!timeLeft) {
    return null; // Hide the countdown once the time is up
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white" 
    style={{
      backgroundImage:
        "radial-gradient(ellipse 100% 100% at 50% 0%, #34045B 0%, #0A0011 80%)",
    }}>
      <h1 className="text-4xl font-extrabold mb-6 animate-pulse">🚀 Launching Soon...</h1>
      <div className="flex space-x-4 text-3xl font-semibold bg-black text-white rounded-lg px-6 py-4 shadow-lg">
        <div className="flex flex-col items-center">
          <span className="text-5xl font-bold">{timeLeft.hours}</span>
          <span className="text-sm uppercase tracking-wider">Hours</span>
        </div>
        <span className="text-5xl font-bold">:</span>
        <div className="flex flex-col items-center">
          <span className="text-5xl font-bold">{timeLeft.minutes}</span>
          <span className="text-sm uppercase tracking-wider">Minutes</span>
        </div>
        <span className="text-5xl font-bold">:</span>
        <div className="flex flex-col items-center">
          <span className="text-5xl font-bold">{timeLeft.seconds}</span>
          <span className="text-sm uppercase tracking-wider">Seconds</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
