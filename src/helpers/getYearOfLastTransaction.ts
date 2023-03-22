import { Transaction } from "entities/Transaction";

interface Props {
  transactions?: Transaction[];
}

export default function getYearOfLastTransaction({ transactions }: Props) {
  const lastTransaction = transactions?.at(-1);

  if (lastTransaction) {
    return new Date(lastTransaction?.accrualMonth).getFullYear().toString();
  }
}
