import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { arrToStr } from "../utils/arrToStr";
import { themeSelector } from "../utils/ThemeSelector";
import "./converter.css";

export const LengthUnitConverter = ({
  backgroundColor,
  theme,
  primaryFont,
  rotation,
  primaryColor,
}) => {
  const [colorString, setColorString] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [inputUnit, setInputUnit] = useState("cm");
  const [outputValue, setOutputValue] = useState(0);
  const [outputUnit, setOutputUnit] = useState("cm");

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
    convertLength(value, inputUnit, outputUnit);
  };

  const handleInputUnitChange = (event) => {
    setInputUnit(event.target.value);
    convertLength(inputValue, event.target.value, outputUnit);
  };

  const handleOutputUnitChange = (event) => {
    setOutputUnit(event.target.value);
    convertLength(inputValue, inputUnit, event.target.value);
  };

  const convertLength = (value, inputUnit, outputUnit) => {
    const inputValueInMeters = parseFloat(value) || 0;
    let result;

    switch (inputUnit) {
      case "cm":
        result = inputValueInMeters * 0.01;
        break;
      case "m":
        result = inputValueInMeters;
        break;
      case "ft":
        result = inputValueInMeters * 0.3048;
        break;
      case "in":
        result = inputValueInMeters * 0.0254;
        break;
      case "km":
        result = inputValueInMeters * 1000;
        break;
      case "mi":
        result = inputValueInMeters * 1609.344;
        break;
      default:
        result = inputValueInMeters;
    }

    switch (outputUnit) {
      case "cm":
        result *= 100;
        break;
      case "m":
        result = result;
        break;
      case "ft":
        result *= 3.28084;
        break;
      case "in":
        result *= 39.3701;
        break;
      case "km":
        result /= 1000;
        break;
      case "mi":
        result /= 1609.344;
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
          <option value="cm">cm</option>
          <option value="m">m</option>
          <option value="ft">ft</option>
          <option value="in">in</option>
          <option value="km">km</option>
          <option value="mi">mi</option>
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
          <option value="cm">cm</option>
          <option value="m">m</option>
          <option value="ft">ft</option>
          <option value="in">in</option>
          <option value="km">km</option>
          <option value="mi">mi</option>
        </select>
      </div>
    </div>
  );
};

LengthUnitConverter.propTypes = {
  backgroundColor: PropTypes.array,
  theme: PropTypes.oneOf([0, 1, 2, 3, 4]),
  primaryFont: PropTypes.string,
  primaryColor: PropTypes.string,
  rotation: PropTypes.number,
};

LengthUnitConverter.defaultProps = {
  backgroundColor: undefined,
  primaryFont: "#333",
  theme: 0,
  rotation: 90,
  primaryColor: "#fff",
};
