type GetCircleDataPath = {
  x: number,
  y: number,
  r: number,
  height: number,
  width: number,
  deg: number,
  fontSize: number,
  isTopArcStart?: boolean,
}
export const getCircleDataPath = ({ x, y, r, deg, isTopArcStart, height, fontSize, width }: GetCircleDataPath) => {
  const a = (180 + (isTopArcStart ? deg : -deg))*Math.PI/180;
  // const a = (180 + 0)*Math.PI/180;
  // const difRadius = (!isTopArcStart ? -fontSize/2 : fontSize/2);
  const radius = r;
  const deltaX = Math.abs(radius)*Math.cos(a);
  const deltaY = -Math.abs(radius)*Math.sin(a);
  const flip = isTopArcStart ? 1 : 0;
  const deltaW = radius - width/2;
  return `
    M ${radius + (isTopArcStart ? fontSize : 0)} ${(isTopArcStart ? r + fontSize : (-r + height))}
    m ${deltaX} ${deltaY}
    a ${r} ${r} 0 1,${flip} ${-2*deltaX}, ${-2*deltaY}
    a ${r} ${r} 0 1,${flip} ${2*deltaX}, ${2*deltaY}
  `;
}