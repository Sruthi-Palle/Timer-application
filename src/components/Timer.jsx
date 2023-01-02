import React, { useEffect, useRef } from "react";
import { useState } from "react";

export const Timer = () => {
  let now = new Date().toLocaleTimeString();
  const [startTimer, setStartTimer] = useState(false);
  const [ctime, setCtime] = useState(now);
  const updateTime = () => {
    let time = new Date().toLocaleTimeString();
    setCtime(time);
  };
  useEffect(() => {
    let interval;
    if (startTimer) {
      interval = setInterval(updateTime, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [startTimer]);

  return (
    <div>
      <h1>{ctime}</h1>
      <button onClick={() => setStartTimer(true)}>start</button>
      <button onClick={() => setStartTimer(false)}>stop</button>
    </div>
  );
};
