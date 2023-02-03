import { rotationLib, dataPathLib } from "@src/shared/libs";

type GetPath = {
  textWidth: number,
  radius: number,
  curve: number,
}

export const getPath = ({ radius, textWidth, curve }: GetPath) => {
  const rotationDeg = rotationLib.getCircleCenterRotationDeg({
    valueLength: textWidth,
    radius: radius,
  });
  const path = dataPathLib.getCircleDataPath({
    x: radius,
    y: radius,
    r: radius,
    deg: rotationDeg,
    isTopArcStart: curve > 0,
  });
  return path;
}