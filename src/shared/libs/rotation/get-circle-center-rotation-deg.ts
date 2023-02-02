type GetCircleCenterRotationDeg = {
  radius: number,
  valueLength: number,

}

export const getCircleCenterRotationDeg = ({ radius, valueLength }: GetCircleCenterRotationDeg) => {
  // const valueSegment = valueLength;
  const availableSegment = 2 * Math.PI * radius - valueLength;
  const availableSegmentDeg = availableSegment / radius;
  const valueDeg = (Math.PI - availableSegmentDeg) / 2;
  return valueDeg;
}