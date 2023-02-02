import React, { useEffect, useState } from 'react';
import { TextPath } from 'react-konva';
import { dataPathLib, textLib, rotationLib } from "@src/shared/libs";

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
  color: string,
  letterSpacing: number,
  lineHeight: number,
}
export const CurvedText = ({
  id,
  width,
  height,
  x,
  y,
  text,
  fill,
  radius,
  fontStyle,
  fontWeight,
  fontFamily,
  fontSize,
  letterSpacing,
}: Props) => {
  const [data, setData] = useState<string>("");

  useEffect(() => {
    const width = textLib.getTextWidth({
      fontSize,
      text,
      letterSpacing,
      fontStyle,
      fontWeight,
      fontFamily,
    });
    const rotationDeg = rotationLib.getCircleCenterRotationDeg({
      valueLength: width,
      radius: radius,
    });
    const path = dataPathLib.getCircleDataPath({
      x: radius,
      y: radius,
      r: radius,
      deg: rotationDeg,
      isTopArcStart: true,
    });
    setData(path)
  }, [radius, text, fontSize, letterSpacing, fontStyle, fontWeight, fontFamily])

  return (
    <TextPath
      id={id}
      fill={fill}
      width={width}
      height={height}
      x={x}
      y={y}
      text={text}
      data={data}
    />
  )
}