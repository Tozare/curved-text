import React from "react";
import type { Element } from "@src/entities/elements";
import { elementsConfig, TextNode, CurvedText } from "@src/entities/elements";

type Props = {
  element: Element,
  isInputModeOpened: boolean,
}

export const ElementNode = ({ element, isInputModeOpened }: Props) => {
  if (element.type === elementsConfig.ELEMENT_TYPES.TEXT) {

    const {
      id, x, y, width, height, fontFamily, fontSize, fontWeight, lineHeight, textAlign, text, letterSpacing, fontStyle, type, fill
    } = element;

    return (
      <TextNode
        id={id}
        x={x}
        y={y}
        width={width}
        height={height}
        fontFamily={fontFamily}
        fontWeight={fontWeight}
        fontStyle={fontStyle}
        fontSize={fontSize}
        fill={fill}
        letterSpacing={letterSpacing}
        lineHeight={lineHeight}
        textAlign={textAlign}
        text={text}
        isInputModeOpened={isInputModeOpened}
      />
    );
  } else if (element.type === elementsConfig.ELEMENT_TYPES.CURVED_TEXT) {
    const {
      id, x, y, radius, path, curve, width, height, fontFamily, fontSize, fontWeight, lineHeight, textAlign, text, letterSpacing, fontStyle, type, fill
    } = element;

    return (
      <CurvedText
        id={id}
        width={width}
        height={height}
        x={x}
        y={y}
        text={text}
        fill={fill}
        radius={radius}
        fontFamily={fontFamily}
        fontWeight={fontWeight}
        fontStyle={fontStyle}
        fontSize={fontSize}
        letterSpacing={letterSpacing}
        lineHeight={lineHeight}
        curve={curve}
        path={path}
        isInputModeOpened={isInputModeOpened}
      />
    );
  }
  return null;
}