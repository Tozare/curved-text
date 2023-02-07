type GetLineDataPath = {
  width: number,
}
export const getLineDataPath = ({ width }: GetLineDataPath) => {
  return `
    M ${0} ${12}
    L ${width} ${12}
  `;
}