import { rotationLib, dataPathLib } from "@src/shared/libs";

type GetPath = {
  textWidth: number,
  radius: number,
  curve: number,
  height: number,
}

export const getPath = ({ radius, textWidth, curve, height }: GetPath) => {
  if (curve === 0) {
    const path = dataPathLib.getLineDataPath({
      width: textWidth,
    });
    return path;
  }
  const rotationDeg = rotationLib.getCircleCenterRotationDeg({
    valueLength: textWidth,
    radius: radius,
  });
  const path = dataPathLib.getCircleDataPath({
    height,
    x: radius,
    y: radius,
    r: radius,
    deg: rotationDeg,
    isTopArcStart: curve > 0,
  });
  return path;
}