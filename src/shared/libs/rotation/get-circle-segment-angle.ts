type GetCircleSegmentAngle = {
  radius: number,
  segment: number,

}

export const GetCircleSegmentAngle = ({ radius, segment }: GetCircleSegmentAngle) => {
  const availableSegment = segment;
  const availableSegmentDeg = availableSegment / radius;
  return availableSegmentDeg;
  // const valueDeg = (Math.PI - availableSegmentDeg) / 2;
  // return valueDeg * (180/Math.PI);
}