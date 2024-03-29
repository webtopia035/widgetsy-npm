import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { arrToStr } from "../utils/arrToStr";
import { themeSelector } from "../utils/ThemeSelector";
import "./calendar.css";

export const Calendar = ({ backgroundColor, theme, primaryFont, rotation }) => {
  const [colorString, setColorString] = useState("");

  const [currentMonth, setCurrentMonth] = useState(new Date());

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const firstDayOfMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth(),
    1
  ).getDay();

  const daysInMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth() + 1,
    0
  ).getDate();

  const renderDays = () => {
    let dayCells = [];
    for (let i = 1; i <= daysInMonth; i++) {
      dayCells.push(
        <div key={i} className="calendar-day">
          {i}
        </div>
      );
    }

    for (let i = 0; i < firstDayOfMonth; i++) {
      dayCells.unshift(<div key={-i} className="calendar-day empty"></div>);
    }

    return dayCells;
  };

  const handlePrevMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1)
    );
  };

  useEffect(() => {
    if (theme !== 0) {
      themeSelector(theme, rotation, setColorString);
    } else if (backgroundColor) {
      arrToStr(backgroundColor, rotation, setColorString);
    } else {
      setColorString("linear-gradient(transparent)");
    }
  }, []);

  return (
    <div
      className="calendar-container"
      style={{ backgroundImage: colorString, color: primaryFont }}
    >
      <div className="calendar-header">
        <button style={{ color: primaryFont }} onClick={handlePrevMonth}>
          &lt;
        </button>
        <h2>{months[currentMonth.getMonth()]}</h2>
        <button style={{ color: primaryFont }} onClick={handleNextMonth}>
          &gt;
        </button>
      </div>
      <div className="calendar-body">
        {days.map((day) => (
          <div key={day} className="calendar-day-header">
            {day}
          </div>
        ))}
        {renderDays()}
      </div>
    </div>
  );
};

Calendar.prototype = {
  backgroundColor: PropTypes.array,
  theme: PropTypes.oneOf([0, 1, 2, 3, 4]),
  primaryFont: PropTypes.string,
  rotation: PropTypes.number,
};

Calendar.defaultProps = {
  backgroundColor: undefined,
  primaryFont: "#333",
  theme: 0,
  rotation: 90,
};
