import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { arrToStr } from "../utils/arrToStr";
import { themeSelector } from "../utils/ThemeSelector";
import "./calculator.css";

export const Calculator = ({
  backgroundColor,
  theme,
  primaryFont,
  rotation,
  primaryColor,
}) => {
  const [input, setInput] = useState("");
  const [colorString, setColorString] = useState("");

  function handleButtonClick(event) {
    const value = event.target.value;
    switch (value) {
      case "=":
        try {
          const result = eval(input);
          setInput(result.toString());
        } catch (error) {
          setInput("Error");
        }
        break;
      case "C":
        setInput("");
        break;
      case "CE":
        setInput(input.slice(0, -1));
        break;
      default:
        setInput((input) => input + value);
        break;
    }
  }
  useEffect(() => {
    if (theme !== 0) {
      themeSelector(theme, rotation, setColorString);
    } else if (backgroundColor) {
      arrToStr(backgroundColor, rotation, setColorString);
    } else {
      setColorString("linear-gradient(transparent)");
    }
  }, [backgroundColor, theme, primaryFont, rotation]);

  return (
    <div
      className="calculator-container"
      style={{ backgroundImage: colorString }}
    >
      <div
        className="calculator-display"
        style={{ backgroundColor: primaryColor }}
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{ backgroundColor: primaryColor }}
        />
      </div>
      <div className="calculator-row" style={{ color: "#fff" }}>
        <button
          className="calculator-button"
          value="7"
          onClick={handleButtonClick}
          style={{ color: primaryFont, backgroundColor: primaryColor }}
        >
          7
        </button>
        <button
          className="calculator-button"
          value="8"
          style={{ color: primaryFont, backgroundColor: primaryColor }}
          onClick={handleButtonClick}
        >
          8
        </button>
        <button
          className="calculator-button"
          value="9"
          style={{ color: primaryFont, backgroundColor: primaryColor }}
          onClick={handleButtonClick}
        >
          9
        </button>
        <button
          className="calculator-button"
          style={{ color: primaryFont, backgroundColor: primaryColor }}
          value="+"
          onClick={handleButtonClick}
        >
          +
        </button>
      </div>
      <div className="calculator-row">
        <button
          className="calculator-button"
          value="4"
          style={{ color: primaryFont, backgroundColor: primaryColor }}
          onClick={handleButtonClick}
        >
          4
        </button>
        <button
          className="calculator-button"
          value="5"
          style={{ color: primaryFont, backgroundColor: primaryColor }}
          onClick={handleButtonClick}
        >
          5
        </button>
        <button
          className="calculator-button"
          value="6"
          style={{ color: primaryFont, backgroundColor: primaryColor }}
          onClick={handleButtonClick}
        >
          6
        </button>
        <button
          className="calculator-button"
          style={{ color: primaryFont, backgroundColor: primaryColor }}
          value="-"
          onClick={handleButtonClick}
        >
          -
        </button>
      </div>
      <div className="calculator-row">
        <button
          className="calculator-button"
          value="1"
          style={{ color: primaryFont, backgroundColor: primaryColor }}
          onClick={handleButtonClick}
        >
          1
        </button>
        <button
          className="calculator-button"
          value="2"
          style={{ color: primaryFont, backgroundColor: primaryColor }}
          onClick={handleButtonClick}
        >
          2
        </button>
        <button
          style={{ color: primaryFont, backgroundColor: primaryColor }}
          className="calculator-button"
          value="3"
          onClick={handleButtonClick}
        >
          3
        </button>
        <button
          className="calculator-button"
          style={{ color: primaryFont, backgroundColor: primaryColor }}
          value="*"
          onClick={handleButtonClick}
        >
          *
        </button>
      </div>
      <div className="calculator-row">
        <button
          className="calculator-button"
          value="0"
          style={{ color: primaryFont, backgroundColor: primaryColor }}
          onClick={handleButtonClick}
        >
          0
        </button>
        <button
          className="calculator-button"
          value="."
          style={{ color: primaryFont, backgroundColor: primaryColor }}
          onClick={handleButtonClick}
        >
          .
        </button>
        <button
          className="calculator-button"
          style={{ color: primaryFont, backgroundColor: primaryColor }}
          value="="
          onClick={handleButtonClick}
        >
          =
        </button>
        <button
          className="calculator-button"
          style={{ color: primaryFont, backgroundColor: primaryColor }}
          value="/"
          onClick={handleButtonClick}
        >
          /
        </button>
      </div>
      <div className="calculator-row">
        <button
          className="calculator-button clear"
          value="CE"
          style={{ color: primaryFont, backgroundColor: primaryColor }}
          onClick={handleButtonClick}
        >
          Clear Last
        </button>
        <button
          className="calculator-button clear"
          value="C"
          style={{ color: primaryFont, backgroundColor: primaryColor }}
          onClick={handleButtonClick}
        >
          Clear All
        </button>
      </div>
    </div>
  );
};

Calculator.prototype = {
  backgroundColor: PropTypes.array,
  theme: PropTypes.oneOf([0, 1, 2, 3, 4]),
  primaryFont: PropTypes.string,
  rotation: PropTypes.number,
};

Calculator.defaultProps = {
  backgroundColor: undefined,
  primaryFont: "#333",
  theme: 0,
  rotation: 90,
};
