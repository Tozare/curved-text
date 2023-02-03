import { rotationLib } from "@src/shared/libs";

type GetTextBoundingHeight = {
  radius: number,
  textWidth: number,
  curve: number,
}

export const getTextBoundingHeight = ({ radius, textWidth, curve }: GetTextBoundingHeight) => {
  if (radius === 0) {
    return 14;
  }
  let res = 0;
  if (textWidth >= 2 * Math.PI * radius) {
    res = radius * 2;
  } else if (textWidth >= Math.PI * radius) {
    res = radius + radius * Math.cos(rotationLib.GetCircleSegmentAngle({
      radius,
      segment: 2 * Math.PI * radius - textWidth
    })/2);
  } else {
    res = radius - radius * Math.cos(rotationLib.GetCircleSegmentAngle({
      radius,
      segment: textWidth
    })/2);
  }
  return res + (curve > 0 ? 14 : 0);
}