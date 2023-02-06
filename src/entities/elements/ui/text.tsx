import React, { useRef } from 'react';
import { ELEMENT_TYPES, TEXT_ALIGN_TYPES } from '@src/entities/elements/config';
import { Values } from '@src/shared/typings/object-values';
import { Text } from "react-konva";
import Konva from 'konva';
import KonvaEventObject = Konva.KonvaEventObject;
// import "./auto-resize-text-area.css";

type Props = {
  id: string,
  x: number,
  y: number,
  width: number,
  height: number,
  fontFamily: string,
  fontWeight: number,
  fontStyle: string,
  fontSize: number,
  fill: string,
  letterSpacing: number,
  lineHeight: number,
  textAlign: Values<typeof TEXT_ALIGN_TYPES>,
  text: string,
  isInputModeOpened: boolean,
}

export const TextNode = ({
  id,
  width,
  height,
  fontFamily,
  fontSize,
  fontWeight,
  fill,
  letterSpacing,
  lineHeight,
  textAlign,
  text,
  x,
  y,
  fontStyle,
  isInputModeOpened,
}: Props) => {
  return (
    <Text
      opacity={isInputModeOpened ? 0 : 1}
      name="NODE"
      id={id}
      x={x}
      y={y}
      width={width}
      height={height}
      text={text}
      fill={fill}
      fontSize={fontSize}
      lineHeight={lineHeight / fontSize}
      letterSpacing={letterSpacing}
      fontStyle={`${fontStyle} ${fontWeight}`}
      align={textAlign}
      fontFamily={fontFamily}
      wrap={"word"}
    />
  )
}