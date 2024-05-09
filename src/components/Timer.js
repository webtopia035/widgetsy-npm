import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { arrToStr } from "../utils/arrToStr";
import { themeSelector } from "../utils/ThemeSelector";
import "./timer.css";

export const Timer = ({
  backgroundColor,
  theme,
  primaryFont,
  rotation,
  primaryColor,
}) => {
  const [colorString, setColorString] = useState("");

  useEffect(() => {
    if (theme !== 0) {
      themeSelector(theme, rotation, setColorString);
    } else if (backgroundColor) {
      arrToStr(backgroundColor, rotation, setColorString);
    } else {
      setColorString("linear-gradient(transparent)");
    }
  }, [backgroundColor, theme, primaryFont, rotation, primaryColor]);

  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const startTimer = () => {
    if (!isRunning) {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
      setIsRunning(true);
    }
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
  };

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    setTime(0);
    setIsRunning(false);
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div
      className="timer-container"
      style={{ backgroundImage: colorString, color: primaryFont }}
    >
      <div className="time-display">{formatTime(time)}</div>
      <div className="button-container">
        {!isRunning ? (
          <button
            onClick={startTimer}
            style={{ color: primaryFont, backgroundColor: primaryColor }}
          >
            Start
          </button>
        ) : (
          <button
            onClick={stopTimer}
            style={{ color: primaryFont, backgroundColor: primaryColor }}
          >
            Stop
          </button>
        )}
        <button
          onClick={resetTimer}
          style={{ color: primaryFont, backgroundColor: primaryColor }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

Timer.propTypes = {
  backgroundColor: PropTypes.array,
  theme: PropTypes.oneOf([0, 1, 2, 3, 4]),
  primaryFont: PropTypes.string,
  primaryColor: PropTypes.string,
  rotation: PropTypes.number,
};

Timer.defaultProps = {
  backgroundColor: undefined,
  primaryFont: "#333",
  theme: 0,
  rotation: 90,
  primaryColor: "#fff",
};
