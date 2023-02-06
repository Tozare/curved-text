import React from "react";
import { Rect } from 'react-konva';
import * as config from "../config";
import { getThemeColors } from '@src/shared/libs/get-theme-colors';
import Konva from 'konva';
import KonvaEventObject = Konva.KonvaEventObject;
type Props = {
  x: number,
  y: number,
  width: number,
  height: number,
  onDoubleClick: () => void,
  isInputModeOpened: boolean,
  onMove: (e: { x: number, y: number }) => void,
}

export const Selection = ({
  x,
  y,
  width,
  height,
  onDoubleClick,
  isInputModeOpened,
  onMove,
}: Props) => {

  const {
    primaryButton,
    primary,
  } = getThemeColors();

  if (isInputModeOpened) {
    return null;
  }

  return (
    <Rect
      id={config.SELECTION_ID}
      x={x}
      y={y}
      width={width}
      height={height}
      strokeWidth={1}
      stroke={primary}
      strokeEnabled
      onDblClick={() => {
        onDoubleClick();
      }}
      draggable
      onDragMove={(e) => {
        onMove({ x: e.target.x(), y: e.target.y() });
      }}
    />
  )
}