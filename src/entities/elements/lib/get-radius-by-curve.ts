import { MAX_RADIUS } from "../config";

type Props = {
  curve: number,
  fontSize: number,
}

export const getRadiusByCurve = ({ curve, fontSize }: Props) => {
  if (curve === 0) return 0;
  return (1/(curve * curve)) * MAX_RADIUS + 10 + (curve < 0 ? fontSize : 0);
}