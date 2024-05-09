import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { arrToStr } from "../utils/arrToStr";
import { themeSelector } from "../utils/ThemeSelector";
import "./converter.css";

export const MassUnitConverter = ({
  backgroundColor,
  theme,
  primaryFont,
  rotation,
  primaryColor,
}) => {
  const [colorString, setColorString] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [inputUnit, setInputUnit] = useState("kg");
  const [outputValue, setOutputValue] = useState("");
  const [outputUnit, setOutputUnit] = useState("kg");

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
    convertMass(value, inputUnit, outputUnit);
  };

  const handleInputUnitChange = (event) => {
    setInputUnit(event.target.value);
    convertMass(inputValue, event.target.value, outputUnit);
  };

  const handleOutputUnitChange = (event) => {
    setOutputUnit(event.target.value);
    convertMass(inputValue, inputUnit, event.target.value);
  };

  const convertMass = (value, inputUnit, outputUnit) => {
    const inputValue = parseFloat(value);
    let result;

    switch (inputUnit) {
      case "kg":
        result = inputValue;
        break;
      case "g":
        result = inputValue / 1000;
        break;
      case "oz":
        result = inputValue / 35.274;
        break;
      case "lb":
        result = inputValue / 2.20462;
        break;
      case "tons":
        result = inputValue / 1000;
        break;
      default:
        result = inputValue;
    }

    switch (outputUnit) {
      case "kg":
        result = result;
        break;
      case "g":
        result = result * 1000;
        break;
      case "oz":
        result = result * 35.274;
        break;
      case "lb":
        result = result * 2.20462;
        break;
      case "tons":
        result = result * 1000;
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
          <option value="kg">kg</option>
          <option value="g">g</option>
          <option value="oz">oz</option>
          <option value="lb">lb</option>
          <option value="tons">tons</option>
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
          <option value="kg">kg</option>
          <option value="g">g</option>
          <option value="oz">oz</option>
          <option value="lb">lb</option>
          <option value="tons">tons</option>
        </select>
      </div>
    </div>
  );
};

MassUnitConverter.propTypes = {
  backgroundColor: PropTypes.array,
  theme: PropTypes.oneOf([0, 1, 2, 3, 4]),
  primaryFont: PropTypes.string,
  primaryColor: PropTypes.string,
  rotation: PropTypes.number,
};

MassUnitConverter.defaultProps = {
  backgroundColor: undefined,
  primaryFont: "#333",
  theme: 0,
  rotation: 90,
  primaryColor: "#fff",
};
