import { rotationLib } from "@src/shared/libs";

type GetTextBoundingWidth = {
  radius: number,
  textWidth: number,
  curve: number,
  lineHeight: number,
}

export const getTextBoundingWidth = ({ radius, textWidth, curve, lineHeight }: GetTextBoundingWidth) => {
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
  let additionalWidth = 0;
  if (curve > 0) {
    if (textWidth > Math.PI * radius) {
      additionalWidth = lineHeight + lineHeight;
    } else {
      additionalWidth = 2 * lineHeight * Math.sin(rotationLib.GetCircleSegmentAngle({
        radius,
        segment: textWidth
      })/2);
    }
  }


  return res + additionalWidth;
}