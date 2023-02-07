import React, { useEffect, useState } from 'react';
import { TextPath, Path } from 'react-konva';
import { dataPathLib, textLib, rotationLib } from "@src/shared/libs";
import { elementsLib, elementsModel } from "@src/entities/elements";
import { reflect } from '@effector/reflect';
import * as model from "../model";

type Props = {
  width: number,
  height: number,
  x: number,
  y: number,
  fontSize: number,
  curve: number,
  path: string,
  isCurveChanging: boolean,

}
const RadiusPreviewView = ({
  width,
  height,
  x,
  y,
  fontSize,
  curve,
  path,
  isCurveChanging,
}: Props) => {
  if (!isCurveChanging) {
    return null;
  }
  const deltaX = elementsLib.getRadiusByCurve({ curve, fontSize }) - (width/2);
  return (
    <>
      <Path
        id={"circle-view"}
        stroke="#C8A2C8"
        // stroke="#black"
        strokeWidth={1}
        width={width}
        height={height}
        x={x - (curve === 0 ? 0 : deltaX) - (curve > 0 ? fontSize : 0)}
        // x={x}
        y={y}
        data={path}
      />
    </>
  )
}

export const RadiusPreview = reflect({
  view: RadiusPreviewView,
  bind: {
    isCurveChanging: model.$isCurveChanging,
  }
})