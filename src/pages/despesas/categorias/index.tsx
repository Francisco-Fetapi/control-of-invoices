import { ExpenseCategoryTable } from "components/tables/ExpenseCategoryTable";
import AppScheme from "layouts/AppScheme";
import { Button, Center } from "@mantine/core";
import Link from "next/link";
import TitleAndButtonAction from "components/TitleAndButtonAction";

export interface ExpenseCategory {
  id: string;
  name: string;
  description: string;
  archived: boolean;
}

export const mockCategories: ExpenseCategory[] = [
  {
    id: "1",
    name: "Categoria 1",
    description: "ola mundo, esta eh uma nova descricao",
    archived: false,
  },
  {
    id: "2",
    name: "Categoria 2",
    description: "ola mundo, esta eh uma nova descricao",
    archived: false,
  },
  {
    id: "3",
    name: "Categoria 3",
    description: "ola mundo, esta eh uma nova descricao",
    archived: true,
  },
  {
    id: "4",
    name: "Categoria 4",
    description: "ola mundo, esta eh uma nova descricao",
    archived: false,
  },
  {
    id: "5",
    name: "Categoria 5",
    description: "ola mundo, esta eh uma nova descricao",
    archived: true,
  },
];

export default function IndexPage() {
  return (
    <div>
      <AppScheme>
        <TitleAndButtonAction
          title="Categoria das Despesas"
          href="/despesas/categorias/adicionar"
        />

        <ExpenseCategoryTable data={mockCategories} />
      </AppScheme>
    </div>
  );
}
