import { Expense, ExpensesTable } from "components/tables/ExpensesTable";
import { Invoice, InvoicesTable } from "components/tables/InvoicesTable";
import AppScheme from "layouts/AppScheme";
import { Tabs } from "@mantine/core";
import TitleAndButtonAction from "components/TitleAndButtonAction";

export const mockInvoices: Invoice[] = [
  {
    id: "o1",
    accrualMonth: new Date(),
    corporationName: "Empresa 1",
    description: "Foi um gasto",
    number: 12321,
    receiptDate: new Date(),
    value: "20",
  },
  {
    id: "o2",
    accrualMonth: new Date(),
    corporationName: "Empresa 2",
    description:
      "Foi um gasto bastante necessario. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione voluptatem vel dolore possimus dicta corporis reiciendis nisi est, doloribus eum laudantium suscipit excepturi quam, fugit natus nostrum, culpa facilis modi.",
    number: 12321,
    receiptDate: new Date(),
    value: "30",
  },
  {
    id: "o3",
    accrualMonth: new Date(),
    corporationName: "Empresa 3",
    description: "Foi um gasto bastante necessario",
    number: 12321,
    receiptDate: new Date(),
    value: "50",
  },
  {
    id: "o4",
    accrualMonth: new Date(),
    corporationName: "Empresa 4",
    description: "Foi um gasto bastante necessario",
    number: 12321,
    receiptDate: new Date(),
    value: "133",
  },
];

export const mockExpenses: Expense[] = [
  {
    id: "awd1",
    accrualMonth: new Date(),
    category: "Categoria",
    corporationName: "Empresa 1",
    name: "Despesa 1",
    payday: new Date(),
    value: "1200",
  },
  {
    id: "awd2",
    accrualMonth: new Date(),
    category: "Categoria 2",
    corporationName: "Empresa 2",
    name: "Despesa 2",
    payday: new Date(),
    value: "1750",
  },
  {
    id: "awd3",
    accrualMonth: new Date(),
    category: "Categoria 3",
    corporationName: "Empresa 3",
    name: "Despesa 3",
    payday: new Date(),
    value: "2300",
  },
  {
    id: "awd4",
    accrualMonth: new Date(),
    category: "Categoria 4",
    corporationName: "Empresa 6",
    name: "Despesa 4",
    payday: new Date(),
    value: "3100",
  },
];

export default function IndexPage() {
  return (
    <div>
      <AppScheme>
        <h2>HISTÓRICO</h2>

        <Tabs defaultValue="invoices">
          <Tabs.List>
            <Tabs.Tab value="invoices">Notas Fiscais</Tabs.Tab>
            <Tabs.Tab value="expense">Despesas</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="invoices">
            <TitleAndButtonAction
              title="Notas Fiscais Lançadas"
              href="/lancar-nota-fiscal"
            />
            <InvoicesTable data={mockInvoices} />
          </Tabs.Panel>
          <Tabs.Panel value="expense">
            <TitleAndButtonAction
              title="Despesas Lançadas"
              href="/despesas/lancar"
            />

            <ExpensesTable data={mockExpenses} />
          </Tabs.Panel>
        </Tabs>
      </AppScheme>
    </div>
  );
}
