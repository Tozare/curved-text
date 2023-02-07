import { rotationLib, dataPathLib } from "@src/shared/libs";

type GetPath = {
  textWidth: number,
  radius: number,
  curve: number,
  height: number,
  fontSize: number,
  width: number,
}

export const getPath = ({ radius, textWidth, curve, height, fontSize, width }: GetPath) => {
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
    width,
    x: radius,
    y: radius,
    r: radius,
    deg: rotationDeg,
    fontSize,
    isTopArcStart: curve > 0,
  });
  return path;
}