import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { arrToStr } from "../utils/arrToStr";
import { themeSelector } from "../utils/ThemeSelector";
import "./clock.css";

export const Clock = ({
  backgroundColor,
  theme,
  primaryFont,
  primaryColor,
  rotation,
}) => {
  const [time, setTime] = useState(new Date());
  const [colorString, setColorString] = useState("");

  useEffect(() => {
    const intervalID = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(intervalID);
  }, []);
  useEffect(() => {
    if (theme !== 0) {
      themeSelector(theme, rotation, setColorString);
    } else if (backgroundColor) {
      arrToStr(backgroundColor, rotation, setColorString);
    } else {
      setColorString("linear-gradient(transparent)");
    }
  }, [backgroundColor, theme, primaryFont, rotation, primaryColor]);

  return (
    <div
      className="clock-container"
      style={{
        backgroundImage: colorString,
        color: primaryFont,
        color: primaryColor,
      }}
    >
      <div className="clock-time">{time.toLocaleTimeString()}</div>
    </div>
  );
};

Clock.prototype = {
  backgroundColor: PropTypes.array,
  theme: PropTypes.oneOf([0, 1, 2, 3, 4]),
  primaryColor: PropTypes.string,
  primaryFont: PropTypes.string,
  rotation: PropTypes.number,
};

Clock.defaultProps = {
  backgroundColor: undefined,
  primaryColor: "#000",
  primaryFont: "#333",
  theme: 0,
  rotation: 90,
};
