type GetLineDataPath = {
  width: number,
}
export const getLineDataPath = ({ width }: GetLineDataPath) => {
  return `
    M ${-width/2} ${0}
    L ${width/2} ${0}
  `;
}