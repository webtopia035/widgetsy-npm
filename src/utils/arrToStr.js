export const arrToStr = (backgroundColor, rotation, setColorString) => {
  let colorStr = "";
  backgroundColor.forEach((color) => {
    colorStr += `${color.color} ${color.stop}%, `;
  });
  setColorString(
    `linear-gradient(${rotation}deg, ${colorStr.substring(
      0,
      colorStr.length - 2
    )})`
  );
};
