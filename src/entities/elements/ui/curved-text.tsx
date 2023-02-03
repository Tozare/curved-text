import React, { useEffect, useState } from 'react';
import { TextPath, Path } from 'react-konva';
import { dataPathLib, textLib, rotationLib } from "@src/shared/libs";
import * as elementsConfig from "../config";
import * as lib from "../lib";
import { Html } from 'react-konva-utils';

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
  onDoubleClick: () => void,
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
  onDoubleClick,
}: Props) => {
  const deltaX = lib.getRadiusByCurve({ curve, fontSize }) - (width/2);
  const w = lib.getRadiusByCurve({ curve, fontSize }) * 2;
  const difRadius = (curve < 0 ? fontSize : 0);
  // const leftDif = (curve > 0 ? fontSize/2 : (curve === 0 ? -100));
  return (
    <>
      <Html
        divProps={{
          style: {
            position: 'absolute',
            width: `${width}px`,
            height: `${height}px`,
            top: `${y + (curve < 0 ? 0 : 0)}px`,
            left: `${x - deltaX - (curve > 0 ? fontSize/2 : 0)}px`,
            opacity: isInputModeOpened ? 0.5 : 1,
          },
        }}
      >
        <div
          style={{ width: "100%", height: "100%" }}
          onDoubleClick={() => {
            onDoubleClick()
          }}
        >
          <svg width={w+fontSize + difRadius + (curve === 0 ? 10000 : 0)} height={w+fontSize + difRadius} viewBox={`0 0 ${w+fontSize + difRadius + (curve === 0 ? 10000 : 0)} ${w+fontSize + difRadius}`} xmlns="http://www.w3.org/2000/svg">
            <path
              id="curved-text-path"
              fill="none"
              d={path}
            />
            <text>
              <textPath
                href="#curved-text-path"
                color={fill}
                spacing={letterSpacing}
                fontStyle={fontStyle}
                fontSize={`${fontSize}px`}
                fontWeight={`${fontWeight}px`}
                letterSpacing={`${letterSpacing}px`}
                fontFamily={fontFamily}
              >
                {text}
              </textPath>
            </text>
          </svg>
        </div>
      </Html>
    </>
  )
}