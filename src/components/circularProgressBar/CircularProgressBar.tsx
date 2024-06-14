import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import React, { useEffect, useState } from "react";

const CircularProgressBar = () => {
  const [percentage, setPercentage] = useState(0);
  const targetPercentage = 75;
  const duration = 1000;
  const stepTime = 50;
  const steps = duration / stepTime;

  useEffect(() => {
    let currentPercentage = 0;
    const increment = targetPercentage / steps;
    const interval = setInterval(() => {
      currentPercentage += increment;
      if (currentPercentage >= targetPercentage) {
        clearInterval(interval);
        currentPercentage = targetPercentage;
      }
      setPercentage(currentPercentage);
    }, stepTime);

    return () => clearInterval(interval);
  }, []);

  return (
    <CircularProgressbar
      value={percentage}
      text={`${Math.round(percentage)}%`}
      styles={buildStyles({
        pathColor: "#37AD24",
        textColor: "#33AC72",
        trailColor: "#d6d6d6",
      })}
    />
  );
};

export default CircularProgressBar;
