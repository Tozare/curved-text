import { MAX_RADIUS } from "../config";

type Props = {
  curve: number
}

export const getRadiusByCurve = ({ curve }: Props) => {
  return (1/(curve * curve)) * MAX_RADIUS + 10;
}