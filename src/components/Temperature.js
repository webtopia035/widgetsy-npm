import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { arrToStr } from "../utils/arrToStr";
import { themeSelector } from "../utils/ThemeSelector";
import "./converter.css";

export const TemperatureUnitConverter = ({
  backgroundColor,
  theme,
  primaryFont,
  rotation,
  primaryColor,
}) => {
  const [colorString, setColorString] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [inputUnit, setInputUnit] = useState("C");
  const [outputValue, setOutputValue] = useState("");
  const [outputUnit, setOutputUnit] = useState("C");

  useEffect(() => {
    if (theme !== 0) {
      themeSelector(theme, rotation, setColorString);
    } else if (backgroundColor) {
      arrToStr(backgroundColor, rotation, setColorString);
    } else {
      setColorString("linear-gradient(transparent)");
    }
  }, [backgroundColor, theme, rotation]);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    convertTemperature(value, inputUnit, outputUnit);
  };

  const handleInputUnitChange = (event) => {
    setInputUnit(event.target.value);
    convertTemperature(inputValue, event.target.value, outputUnit);
  };

  const handleOutputUnitChange = (event) => {
    setOutputUnit(event.target.value);
    convertTemperature(inputValue, inputUnit, event.target.value);
  };

  const convertTemperature = (value, inputUnit, outputUnit) => {
    const inputValue = parseFloat(value);
    let result;

    switch (inputUnit) {
      case "C":
        result = inputValue;
        break;
      case "F":
        result = (inputValue - 32) * (5 / 9);
        break;
      case "K":
        result = inputValue - 273.15;
        break;
      default:
        result = inputValue;
    }

    switch (outputUnit) {
      case "C":
        result = result;
        break;
      case "F":
        result = result * (9 / 5) + 32;
        break;
      case "K":
        result = result + 273.15;
        break;
      default:
        result = result;
    }

    setOutputValue(result.toFixed(2));
  };

  return (
    <div
      className="converter-container"
      style={{ backgroundImage: colorString, color: primaryFont }}
    >
      <div className="input-container">
        <input
          type="number"
          value={inputValue}
          onChange={handleInputChange}
          style={{ backgroundColor: primaryColor, color: primaryFont }}
        />
        <select
          value={inputUnit}
          onChange={handleInputUnitChange}
          style={{ backgroundColor: primaryColor, color: primaryFont }}
        >
          <option value="C">°C</option>
          <option value="F">°F</option>
          <option value="K">K</option>
        </select>
      </div>
      <span>Convert to:</span>
      <div className="input-container">
        <div
          className="result"
          style={{ backgroundColor: primaryColor, color: primaryFont }}
        >
          {outputValue} {outputUnit}
        </div>

        <select
          value={outputUnit}
          onChange={handleOutputUnitChange}
          style={{ backgroundColor: primaryColor, color: primaryFont }}
        >
          <option value="C">°C</option>
          <option value="F">°F</option>
          <option value="K">K</option>
        </select>
      </div>
    </div>
  );
};

TemperatureUnitConverter.propTypes = {
  backgroundColor: PropTypes.array,
  theme: PropTypes.oneOf([0, 1, 2, 3, 4]),
  primaryFont: PropTypes.string,
  primaryColor: PropTypes.string,
  rotation: PropTypes.number,
};

TemperatureUnitConverter.defaultProps = {
  backgroundColor: undefined,
  primaryFont: "#333",
  theme: 0,
  rotation: 90,
  primaryColor: "#fff",
};
