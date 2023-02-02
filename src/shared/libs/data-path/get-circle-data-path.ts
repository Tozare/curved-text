type GetCircleDataPath = {
  x: number,
  y: number,
  r: number,
  deg: number,
  isTopArcStart?: boolean,
}
export const getCircleDataPath = ({ x, y, r, deg, isTopArcStart }: GetCircleDataPath) => {
  const a = (180 + (isTopArcStart ? deg : -deg))*Math.PI/180;
  const deltaX = r*Math.cos(a);
  const deltaY = -r*Math.sin(a);
  const flip = isTopArcStart ? 1 : 0;
  return `
    M ${r} ${r}
    m ${deltaX} ${deltaY}
    a ${r} ${r} 0 1,${flip} ${-2*deltaX}, ${-2*deltaY}
    a ${r} ${r} 0 1,${flip} ${2*deltaX}, ${2*deltaY}
  `;
}