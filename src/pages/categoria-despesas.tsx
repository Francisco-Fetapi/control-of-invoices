import { ExpenseCategoryTable } from "components/ExpenseCategoryTable";
import AppScheme from "layouts/AppScheme";
import { Button, Center } from "@mantine/core";
import { IconPlus } from "@tabler/icons";
import Link from "next/link";

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
        <h2>Categoria das Despesas</h2>

        <ExpenseCategoryTable data={mockCategories} />

        <Center mt={30}>
          <Link href="adicionar-categoria-despesas" passHref>
            <Button component="a" leftIcon={<IconPlus size="1rem" />}>
              Adicionar
            </Button>
          </Link>
        </Center>
      </AppScheme>
    </div>
  );
}
