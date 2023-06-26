import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { arrToStr } from "../utils/arrToStr";
import { themeSelector } from "../utils/ThemeSelector";
import "./whiteboard.css";

export const Whiteboard = ({
  backgroundColor,
  theme,
  primaryFont,
  rotation,
}) => {
  const [color, setColor] = useState("#000000");
  const [isDrawing, setIsDrawing] = useState(false);
  const [colorString, setColorString] = useState("");
  const [undoStack, setUndoStack] = useState([]);
  const [ctx, setCtx] = useState(null);
  const [canvas, setCanvas] = useState(null);

  const canvasRef = useRef();

  

  const handleMouseDown = (event) => {
    const { offsetX, offsetY } = event.nativeEvent;
    canvas.width = 0.9 * canvas.parentNode.offsetWidth;
    canvas.height = 0.8 * canvas.parentNode.offsetHeight;

    ctx.strokeStyle = color;
    ctx.lineWidth = 5;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    ctx.beginPath();
    ctx.moveTo(offsetX, offsetY);
    setUndoStack([
      ...undoStack,
      ctx.getImageData(0, 0, canvas.width, canvas.height),
    ]);
    setIsDrawing(true);
  };

  const handleMouseMove = (event) => {
    if (isDrawing) {
      // const canvas = canvasRef.current;
      // const ctx = canvas.getContext("2d", { willReadFrequently: true });
      const { offsetX, offsetY } = event.nativeEvent;

      ctx.lineTo(offsetX, offsetY);
      ctx.stroke();
    }
  };

  const handleMouseUp = () => {
    setIsDrawing(false);
  };

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  const handleEraserClick = () => {
    setColor("#ffffff");
  };

  const handleUndoClick = () => {
    if (undoStack.length > 1) {
      // const canvas = canvasRef.current;
      // const ctx = canvas.getContext("2d", { willReadFrequently: true });

      setUndoStack(undoStack.slice(0, -1));
      ctx.putImageData(undoStack[undoStack.length - 2], 0, 0);
    }
  };

  const handleClearClick = () => {
    // const canvas = canvasRef.current;
    // const ctx = canvas.getContext("2d", { willReadFrequently: true });

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setUndoStack([ctx.getImageData(0, 0, canvas.width, canvas.height)]);
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

  useEffect(() => {
    const Canvas = canvasRef.current;
    const Ctx = Canvas.getContext("2d", { willReadFrequently: true });
    setCtx(Ctx);
    setCanvas(Canvas);
  }, []);

  return (
    <div
      className="whiteboard-container"
      style={{ backgroundImage: colorString }}
    >
      <div className="whiteboard-toolbar">
        <input type="color" value={color} onChange={handleColorChange} />
        <button onClick={handleEraserClick} style={{ color: primaryFont }}>
          Eraser
        </button>
        <button onClick={handleUndoClick} style={{ color: primaryFont }}>
          Undo
        </button>
        <button onClick={handleClearClick} style={{ color: primaryFont }}>
          Clear
        </button>
      </div>
      <canvas
        ref={canvasRef}
        className="whiteboard-canvas"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      ></canvas>
    </div>
  );
};

Whiteboard.prototype = {
  backgroundColor: PropTypes.array,
  theme: PropTypes.oneOf([0, 1, 2, 3, 4]),
  primaryFont: PropTypes.string,
  rotation: PropTypes.number,
};

Whiteboard.defaultProps = {
  backgroundColor: undefined,
  primaryFont: "#333",
  theme: 0,
  rotation: 90,
};
