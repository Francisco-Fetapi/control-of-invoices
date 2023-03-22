import { Transaction } from "entities/Transaction";

interface Props {
  transactions?: Transaction[];
}

export default function gettransactionsYear({ transactions }: Props) {
  if (!transactions) return;
  const years = new Set<string>();

  transactions.forEach((transaction) => {
    const date = new Date(transaction.accrualMonth);
    const year = date.getFullYear();
    years.add(year.toString());
  });

  return Array.from(years);
}
