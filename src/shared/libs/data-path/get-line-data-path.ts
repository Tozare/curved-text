type GetLineDataPath = {
  width: number,
}
export const getLineDataPath = ({ width }: GetLineDataPath) => {
  return `
    M ${0} ${10.5}
    L ${width} ${10.5}
  `;
}