import { Expense } from "entities/Expense";
import { Invoice } from "entities/Invoice";
import { Settings } from "entities/Settings";
import { User } from "entities/User";
import { apiRoutes } from "lib/axios";
import { GetExpensesApiResponse } from "pages/api/expense";
import { createContext } from "react";
import { useQuery } from "react-query";
import { ExpenseDoc } from "services/getExpenses";

export interface UserDocument extends User {
  id: string;
  settings: Settings;
}

export interface HistoryProviderProps {
  expenses?: ExpenseDoc[];
  invoices: Invoice[];
  expensesIsLoading: boolean;
  invoicesIsLoading: boolean;
}

export const HistoryContext = createContext<Partial<HistoryProviderProps>>({});

export default function HistoryProvider({ children }: React.PropsWithChildren) {
  const getExpenses = useQuery("expenses", () => {
    let res = apiRoutes.get<GetExpensesApiResponse>("/expense");
    return res;
  });
  //   const getInvoices = useQuery("invoices", () => {
  //     let res = apiRoutes.get("/invoice");
  //     return res;
  //   });

  const expensesIsLoading = getExpenses.isLoading;
  const expenses = getExpenses.data?.data.expenses;

  return (
    <HistoryContext.Provider value={{ expensesIsLoading, expenses }}>
      {children}
    </HistoryContext.Provider>
  );
}
