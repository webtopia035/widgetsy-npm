import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { arrToStr } from "../utils/arrToStr";
import { themeSelector } from "../utils/ThemeSelector";
import "./converter.css";

export const AreaUnitConverter = ({
  backgroundColor,
  theme,
  primaryFont,
  rotation,
  primaryColor,
}) => {
  const [colorString, setColorString] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [inputUnit, setInputUnit] = useState("m²");
  const [outputValue, setOutputValue] = useState("");
  const [outputUnit, setOutputUnit] = useState("m²");

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
    convertArea(value, inputUnit, outputUnit);
  };

  const handleInputUnitChange = (event) => {
    setInputUnit(event.target.value);
    convertArea(inputValue, event.target.value, outputUnit);
  };

  const handleOutputUnitChange = (event) => {
    setOutputUnit(event.target.value);
    convertArea(inputValue, inputUnit, event.target.value);
  };

  const convertArea = (value, inputUnit, outputUnit) => {
    const inputValue = parseFloat(value);
    let result;

    switch (inputUnit) {
      case "m²":
        result = inputValue;
        break;
      case "km²":
        result = inputValue * 1e6;
        break;
      case "ft²":
        result = inputValue * 0.092903;
        break;
      case "in²":
        result = inputValue * 0.00064516;
        break;
      case "acres":
        result = inputValue * 4046.86;
        break;
      case "hectares":
        result = inputValue * 10000;
        break;
      default:
        result = inputValue;
    }

    switch (outputUnit) {
      case "m²":
        result = result;
        break;
      case "km²":
        result = result / 1e6;
        break;
      case "ft²":
        result = result / 0.092903;
        break;
      case "in²":
        result = result / 0.00064516;
        break;
      case "acres":
        result = result / 4046.86;
        break;
      case "hectares":
        result = result / 10000;
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
          <option value="m²">m²</option>
          <option value="km²">km²</option>
          <option value="ft²">ft²</option>
          <option value="in²">in²</option>
          <option value="acres">acres</option>
          <option value="hectares">hectares</option>
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
          <option value="m²">m²</option>
          <option value="km²">km²</option>
          <option value="ft²">ft²</option>
          <option value="in²">in²</option>
          <option value="acres">acres</option>
          <option value="hectares">hectares</option>
        </select>
      </div>
    </div>
  );
};

AreaUnitConverter.propTypes = {
  backgroundColor: PropTypes.array,
  theme: PropTypes.oneOf([0, 1, 2, 3, 4]),
  primaryFont: PropTypes.string,
  primaryColor: PropTypes.string,
  rotation: PropTypes.number,
};

AreaUnitConverter.defaultProps = {
  backgroundColor: undefined,
  primaryFont: "#333",
  theme: 0,
  rotation: 90,
  primaryColor: "#fff",
};
