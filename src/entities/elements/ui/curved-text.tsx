import React, { useEffect, useState } from 'react';
import { TextPath, Path } from 'react-konva';
import { dataPathLib, textLib, rotationLib } from "@src/shared/libs";
import * as elementsConfig from "../config";
import * as lib from "../lib";

type Props = {
  id: string,
  width: number,
  height: number,
  x: number,
  y: number,
  text: string,
  fill: string,
  radius: number,
  fontFamily: string,
  fontWeight: number,
  fontStyle: string,
  fontSize: number,
  letterSpacing: number,
  lineHeight: number,
  curve: number,
  path: string,
  isInputModeOpened: boolean,
}
export const CurvedText = ({
  id,
  width,
  height,
  x,
  y,
  text,
  fill,
  // radius,
  fontStyle,
  fontWeight,
  fontFamily,
  fontSize,
  letterSpacing,
  lineHeight,
  curve,
  path,
  isInputModeOpened,
}: Props) => {
  const deltaX = lib.getRadiusByCurve({ curve }) - (width/2);

  return (
    <>
      <TextPath
        opacity={isInputModeOpened ? 0.6 : 1}
        id={id}
        fill={fill}
        // width={width}
        // height={height}
        x={x - deltaX}
        y={y}
        text={text}
        data={path}
        fontStyle={fontStyle}
        fontWeight={fontWeight}
        fontSize={fontSize}
        letterSpacing={letterSpacing}
        lineHeight={lineHeight}
        fontFamily={fontFamily}
      />
      {/*<Path*/}
      {/*  id={"path-test-view"}*/}
      {/*  stroke="black"*/}
      {/*  strokeWidth={2}*/}
      {/*  width={width}*/}
      {/*  height={height}*/}
      {/*  x={x - deltaX}*/}
      {/*  y={y}*/}
      {/*  data={path}*/}
      {/*/>*/}
    </>
  )
}