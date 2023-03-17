import { ExpenseCategoryTable } from "components/ExpenseCategoryTable";
import AppScheme from "layouts/AppScheme";

export interface ExpenseCategory {
  id: string;
  name: string;
  description: string;
}

const mockCategories: ExpenseCategory[] = [
  {
    id: "1",
    name: "Categoria 1",
    description: "ola mundo, esta eh uma nova descricao",
  },
  {
    id: "2",
    name: "Categoria 2",
    description: "ola mundo, esta eh uma nova descricao",
  },
  {
    id: "3",
    name: "Categoria 3",
    description: "ola mundo, esta eh uma nova descricao",
  },
  {
    id: "4",
    name: "Categoria 4",
    description: "ola mundo, esta eh uma nova descricao",
  },
  {
    id: "5",
    name: "Categoria 5",
    description: "ola mundo, esta eh uma nova descricao",
  },
];

export default function IndexPage() {
  return (
    <div>
      <AppScheme>
        <h2>Categoria das Despesas</h2>

        <ExpenseCategoryTable data={mockCategories} />
      </AppScheme>
    </div>
  );
}
