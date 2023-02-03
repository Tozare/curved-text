type GetTextHeight = {
  fontSize: number,
  text: string,
  width: number,
  lineHeight: number,
  letterSpacing: number,
  fontFamily: string,
  fontWeight: number,
  fontStyle: string,
};

export const getTextHeight = ({
  fontSize,
  text,
  width,
  lineHeight,
  letterSpacing,
  fontStyle,
  fontWeight,
  fontFamily,
}: GetTextHeight): number => {
  const textElement = document.createElement("div");
  textElement.style.fontSize = `${fontSize}px`;
  textElement.style.fontWeight = `${fontWeight}`;
  textElement.style.fontFamily = fontFamily;
  textElement.style.fontStyle = fontStyle;
  textElement.style.lineHeight = `${lineHeight}px`;
  textElement.style.position = "absolute";
  textElement.style.letterSpacing = `${letterSpacing}px`;
  textElement.style.visibility = "hidden";
  textElement.style.width = `${width}px`;
  textElement.style.whiteSpace = "pre-line";
  textElement.style.height = "fit-content";
  textElement.style.wordWrap = "break-word";
  textElement.style.wordBreak = "break-word";
  textElement.innerHTML = text;
  document.body.appendChild(textElement);

  const { clientHeight, clientWidth } = textElement;

  document.body.removeChild(textElement);
  return clientHeight;
};
