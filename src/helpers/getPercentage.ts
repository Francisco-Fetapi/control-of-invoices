interface Props {
  total: number;
  value: number;
}

export default function getPercentage({ value, total }: Props) {
  return Math.min(Math.round((value / total) * 100), 100);
}
