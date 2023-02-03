type GetLineDataPath = {
  width: number,
}
export const getLineDataPath = ({ width }: GetLineDataPath) => {
  return `
    M ${-width/2} ${7}
    L ${width/2} ${7}
  `;
}