import { Transaction } from "entities/Transaction";
import { getMonthName } from "./getMonthName";

interface Props {
  transactions?: Transaction[];
  year?: string;
}

export default function getransactionsPerMonth({ year, transactions }: Props) {
  if (!transactions || !year) return;
  let filteredtransactions = transactions.filter((transaction) => {
    const date = new Date(transaction.accrualMonth);
    return date.getFullYear() === +year;
  });

  let mappedtransactions = filteredtransactions.map((transaction) => {
    return {
      ...transaction,
      value: +transaction.value,
      accrualMonth: new Date(transaction.accrualMonth),
    };
  });

  let transactionsPerMonth: Record<string, number> = {};

  mappedtransactions.forEach((transaction) => {
    const month = getMonthName(transaction.accrualMonth);
    const currentValue = transactionsPerMonth[month] || 0;
    transactionsPerMonth[month] = currentValue + transaction.value;
  });

  return transactionsPerMonth;
}
