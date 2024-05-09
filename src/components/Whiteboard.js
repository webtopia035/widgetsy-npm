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
  primaryColor,
}) => {
  const [color, setColor] = useState("#000000");
  const [isDrawing, setIsDrawing] = useState(false);
  const [colorString, setColorString] = useState("");
  const [undoStack, setUndoStack] = useState([]);
  const [ctx, setCtx] = useState(null);
  const [canvas, setCanvas] = useState(null);

  const canvasRef = useRef();

  const handleMouseDown = (event) => {
    const canvasBounds = canvas.getBoundingClientRect();
    const offsetX = event.clientX - canvasBounds.left;
    const offsetY = event.clientY - canvasBounds.top;

    if (ctx) {
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
    }
  };

  const handleMouseMove = (event) => {
    if (isDrawing) {
      const { offsetX, offsetY } = event.nativeEvent;
      if (ctx) {
        ctx.lineTo(offsetX, offsetY);
        ctx.stroke();
      }
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
    if (undoStack.length > 1 && ctx) {
      setUndoStack(undoStack.slice(0, -1));
      ctx.putImageData(undoStack[undoStack.length - 2], 0, 0);
    }
  };

  const handleClearClick = () => {
    if (ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      setUndoStack([ctx.getImageData(0, 0, canvas.width, canvas.height)]);
    }
  };

  useEffect(() => {
    if (theme !== 0) {
      themeSelector(theme, rotation, setColorString);
    } else if (backgroundColor) {
      arrToStr(backgroundColor, rotation, setColorString);
    } else {
      setColorString("linear-gradient(transparent)");
    }
  }, [theme, rotation, backgroundColor]);

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
        <button
          onClick={handleEraserClick}
          style={{ color: primaryFont, backgroundColor: primaryColor }}
        >
          Eraser
        </button>
        <button
          onClick={handleUndoClick}
          style={{ color: primaryFont, backgroundColor: primaryColor }}
        >
          Undo
        </button>
        <button
          onClick={handleClearClick}
          style={{ color: primaryFont, backgroundColor: primaryColor }}
        >
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

Whiteboard.propTypes = {
  backgroundColor: PropTypes.array,
  theme: PropTypes.oneOf([0, 1, 2, 3, 4]),
  primaryFont: PropTypes.string,
  rotation: PropTypes.number,
  primaryColor: PropTypes.string,
};

Whiteboard.defaultProps = {
  backgroundColor: undefined,
  primaryFont: "#333",
  theme: 0,
  rotation: 90,
  primaryColor: "#000",
};
