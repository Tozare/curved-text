type GetTextWidth = {
  fontSize: number,
  letterSpacing: number,
  fontFamily: string,
  fontWeight: number,
  fontStyle: string,
  text: string,
};

export const getTextWidth = ({
  fontSize,
  text,
  letterSpacing,
  fontStyle,
  fontWeight,
  fontFamily,
}: GetTextWidth): number => {
  const textElement = document.createElement("span");
  document.body.appendChild(textElement);
  textElement.innerHTML = text;
  textElement.style.fontSize = `${fontSize + 1}px`;
  textElement.style.fontWeight = `${fontWeight}`;
  textElement.style.fontFamily = fontFamily;
  textElement.style.fontStyle = fontStyle;
  textElement.style.position = "absolute";
  textElement.style.letterSpacing = `${letterSpacing}px`;
  textElement.style.visibility = "hidden";
  textElement.style.width = "auto";
  textElement.style.whiteSpace = "no-wrap";
  const width = Math.ceil(textElement.clientWidth);
  document.body.removeChild(textElement);
  return width;
};
