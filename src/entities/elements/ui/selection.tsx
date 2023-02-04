import React from "react";
import { Rect } from 'react-konva';
import * as config from "../config";
import { getThemeColors } from '@src/shared/libs/get-theme-colors';
type Props = {
  x: number,
  y: number,
  width: number,
  height: number,
  onDoubleClick: () => void,
  isInputModeOpened: boolean,
}

export const Selection = ({
  x,
  y,
  width,
  height,
  onDoubleClick,
  isInputModeOpened,
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
    />
  )
}