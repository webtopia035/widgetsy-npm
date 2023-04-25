export const themeSelector = (theme, rotation, setColorString) => {
  switch (theme) {
    case 1:
      setColorString(
        `linear-gradient(${rotation}deg, rgba(166,255,203,1) 0%, rgba(18,216,250,1) 50%, rgba(31,162,255,1) 100%)`
      );
      break;

    case 2:
      setColorString(
        `linear-gradient(${rotation}deg, rgba(0,57,115,1) 0%, rgba(229,229,190,1) 100%)`
      );
      break;

    case 3:
      setColorString(
        `linear-gradient(${rotation}deg, rgba(72,85,99,1) 0%, rgba(41,50,60,1) 100%)`
      );
      break;

    case 4:
      setColorString(
        `linear-gradient(${rotation}deg, rgba(136,21,191,1) 0%, rgba(170,7,107,1) 50%, rgba(237,9,64,1) 100%)`
      );
      break;

    default:
      break;
  }
};
