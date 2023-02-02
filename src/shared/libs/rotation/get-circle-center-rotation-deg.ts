type GetCircleCenterRotationDeg = {
  radius: number,
  valueLength: number,

}

export const getCircleCenterRotationDeg = ({ radius, valueLength }: GetCircleCenterRotationDeg) => {
  const availableSegment = 2 * Math.PI * radius - valueLength;
  const availableSegmentDeg = availableSegment / radius;
  const valueDeg = (Math.PI - availableSegmentDeg) / 2;
  return valueDeg * (180/Math.PI);
}