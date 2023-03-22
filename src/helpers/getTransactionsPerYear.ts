import { Transaction } from "entities/Transaction";

interface Props {
  transactions?: Transaction[];
}

export default function getTransactionsYear({ transactions }: Props) {
  if (!transactions) return;
  const years = new Set<string>();

  const orderedTransaction = transactions.sort((a, b) => {
    const dateA = new Date(a.accrualMonth);
    const yearA = dateA.getFullYear();

    const dateB = new Date(b.accrualMonth);
    const yearB = dateB.getFullYear();
    return yearA - yearB;
  });

  orderedTransaction.forEach((transaction) => {
    const date = new Date(transaction.accrualMonth);
    const year = date.getFullYear();
    years.add(year.toString());
  });

  return Array.from(years);
}
