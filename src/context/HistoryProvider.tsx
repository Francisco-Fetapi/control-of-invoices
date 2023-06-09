import { Expense } from "entities/Expense";
import { Invoice } from "entities/Invoice";
import { Settings } from "entities/Settings";
import { User } from "entities/User";
import { apiRoutes } from "lib/axios";
import { GetExpensesApiResponse } from "pages/api/expense";
import { GetInvoicesApiResponse } from "pages/api/invoice";
import { createContext } from "react";
import { useQuery } from "react-query";
import { ExpenseDoc } from "services/getExpenses";
import { InvoiceDoc } from "services/getInvoices";

export interface UserDocument extends User {
  id: string;
  settings: Settings;
}

export interface HistoryProviderProps {
  expenses?: ExpenseDoc[];
  invoices?: InvoiceDoc[];
  expensesIsLoading: boolean;
  invoicesIsLoading: boolean;
  totalInvoices: number;
}

export const HistoryContext = createContext<Partial<HistoryProviderProps>>({});

export default function HistoryProvider({ children }: React.PropsWithChildren) {
  const getExpenses = useQuery("expenses", () => {
    let res = apiRoutes.get<GetExpensesApiResponse>("/expense");
    return res;
  });
  const getInvoices = useQuery("invoices", () => {
    let res = apiRoutes.get<GetInvoicesApiResponse>("/invoice");
    return res;
  });

  const expensesIsLoading = getExpenses.isLoading;
  const expenses = getExpenses.data?.data.expenses;
  const invoicesIsLoading = getInvoices.isLoading;
  const invoices = getInvoices.data?.data.invoices;

  let totalInvoices = 0;

  if (invoices?.length) {
    totalInvoices = invoices.reduce((acc, act) => {
      return +acc + +act.value;
    }, 0);
  }

  return (
    <HistoryContext.Provider
      value={{
        totalInvoices,
        expensesIsLoading,
        expenses,
        invoices,
        invoicesIsLoading,
      }}
    >
      {children}
    </HistoryContext.Provider>
  );
}
