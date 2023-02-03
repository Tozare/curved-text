import { rotationLib } from "@src/shared/libs";

type GetTextBoundingWidth = {
  radius: number,
  textWidth: number,
}

export const getTextBoundingWidth = ({ radius, textWidth }: GetTextBoundingWidth) => {
  if (radius === 0) {
    return textWidth;
  }
  let res = 0;
  if (textWidth >= Math.PI * radius) {
    res = radius * 2;
  } else {
    res = 2 * radius * Math.sin(rotationLib.GetCircleSegmentAngle({
      radius,
      segment: textWidth
    })/2);
  }
  return res;
}