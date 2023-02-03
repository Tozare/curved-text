type GetCircleDataPath = {
  x: number,
  y: number,
  r: number,
  height: number,
  deg: number,
  isTopArcStart?: boolean,
}
export const getCircleDataPath = ({ x, y, r, deg, isTopArcStart, height }: GetCircleDataPath) => {
  const a = (180 + (isTopArcStart ? deg : -deg))*Math.PI/180;
  const deltaX = Math.abs(r)*Math.cos(a);
  const deltaY = -Math.abs(r)*Math.sin(a);
  const flip = isTopArcStart ? 1 : 0;
  return `
    M ${r} ${isTopArcStart ? r : (-r + height)}
    m ${deltaX} ${deltaY}
    a ${r} ${r} 0 1,${flip} ${-2*deltaX}, ${-2*deltaY}
    a ${r} ${r} 0 1,${flip} ${2*deltaX}, ${2*deltaY}
  `;
}