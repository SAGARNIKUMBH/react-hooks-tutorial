import React, { useState, useEffect } from "react";

const HookTimer = () => {
  const [timer, settimer] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const toggle = () => {
    setIsActive(!isActive);
  };

  const reset = () => {
    settimer(0);
    setIsActive(false);
  };

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        settimer((timer) => timer + 1);
      }, 1000);
    } else if (!isActive && timer !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, timer]);

  return (
    <div>
      <div>{timer}</div>

      <button onClick={toggle}>{isActive ? "Pause" : "Start"}</button>
      <button className="button" onClick={reset}>
        Reset
      </button>
    </div>
  );
};

export default HookTimer;
