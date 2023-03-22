import { ExpenseDoc } from "services/getExpenses";
import { InvoiceDoc } from "services/getInvoices";
import getransactionsPerMonth from "./getTransactionsPerMonth";

interface Props {
  invoices?: InvoiceDoc[];
  expenses?: ExpenseDoc[];
  year?: string;
}

export default function getBalancePerMonth({
  expenses,
  invoices,
  year,
}: Props) {
  if (!expenses || !invoices || !year) return;

  const expensesPerMonth = getransactionsPerMonth({
    transactions: expenses,
    year,
  })!;
  const invoicesPerMonth = getransactionsPerMonth({
    transactions: invoices,
    year,
  })!;
  const allTransactions = { ...expensesPerMonth, ...invoicesPerMonth };

  const balancePerMonth = Object.keys(allTransactions).map((month) => {
    const invoice = invoicesPerMonth[month] || 0;
    const expense = expensesPerMonth[month] || 0;

    return {
      [month]: [invoice, expense, Math.abs(invoice - expense)],
    };
  });

  return balancePerMonth[0];
}
