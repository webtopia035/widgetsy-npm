import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { arrToStr } from "../utils/arrToStr";
import { themeSelector } from "../utils/ThemeSelector";
import "./converter.css";

export const SpeedUnitConverter = ({
  backgroundColor,
  theme,
  primaryFont,
  rotation,
  primaryColor,
}) => {
  const [colorString, setColorString] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [inputUnit, setInputUnit] = useState("m/s");
  const [outputValue, setOutputValue] = useState(0);
  const [outputUnit, setOutputUnit] = useState("m/s");

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
    convertSpeed(value, inputUnit, outputUnit);
  };

  const handleInputUnitChange = (event) => {
    setInputUnit(event.target.value);
    convertSpeed(inputValue, event.target.value, outputUnit);
  };

  const handleOutputUnitChange = (event) => {
    setOutputUnit(event.target.value);
    convertSpeed(inputValue, inputUnit, event.target.value);
  };

  const convertSpeed = (value, inputUnit, outputUnit) => {
    const inputValue = parseFloat(value) || 0;
    let result;

    switch (inputUnit) {
      case "m/s":
        result = inputValue;
        break;
      case "km/h":
        result = inputValue / 3.6;
        break;
      case "ft/s":
        result = inputValue / 3.28084;
        break;
      case "mph":
        result = inputValue / 2.23694;
        break;
      case "knots":
        result = inputValue / 1.94384;
        break;
      default:
        result = inputValue;
    }

    switch (outputUnit) {
      case "m/s":
        result = result;
        break;
      case "km/h":
        result *= 3.6;
        break;
      case "ft/s":
        result *= 3.28084;
        break;
      case "mph":
        result *= 2.23694;
        break;
      case "knots":
        result *= 1.94384;
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
          <option value="m/s">m/s</option>
          <option value="km/h">km/h</option>
          <option value="ft/s">ft/s</option>
          <option value="mph">mph</option>
          <option value="knots">knots</option>
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
          <option value="m/s">m/s</option>
          <option value="km/h">km/h</option>
          <option value="ft/s">ft/s</option>
          <option value="mph">mph</option>
          <option value="knots">knots</option>
        </select>
      </div>
    </div>
  );
};

SpeedUnitConverter.propTypes = {
  backgroundColor: PropTypes.array,
  theme: PropTypes.oneOf([0, 1, 2, 3, 4]),
  primaryFont: PropTypes.string,
  primaryColor: PropTypes.string,
  rotation: PropTypes.number,
};

SpeedUnitConverter.defaultProps = {
  backgroundColor: undefined,
  primaryFont: "#333",
  theme: 0,
  rotation: 90,
  primaryColor: "#fff",
};
