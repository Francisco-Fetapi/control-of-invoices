import { ExpensesTable } from "components/tables/ExpensesTable";
import { InvoicesTable } from "components/tables/InvoicesTable";
import AppScheme from "layouts/AppScheme";
import { Tabs } from "@mantine/core";
import TitleAndButtonAction from "components/TitleAndButtonAction";
import HistoryProvider from "context/HistoryProvider";

export const mockInvoices = [
  {
    id: "o1",
    accrualMonth: "",
    corporationName: "Empresa 1",
    description: "Foi um gasto",
    number: 12321,
    receiptDate: "",
    value: "20",
  },
  {
    id: "o2",
    accrualMonth: "",
    corporationName: "Empresa 2",
    description:
      "Foi um gasto bastante necessario. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione voluptatem vel dolore possimus dicta corporis reiciendis nisi est, doloribus eum laudantium suscipit excepturi quam, fugit natus nostrum, culpa facilis modi.",
    number: 12321,
    receiptDate: "",
    value: "30",
  },
  {
    id: "o3",
    accrualMonth: "",
    corporationName: "Empresa 3",
    description: "Foi um gasto bastante necessario",
    number: 12321,
    receiptDate: "",
    value: "50",
  },
  {
    id: "o4",
    accrualMonth: "",
    corporationName: "Empresa 4",
    description: "Foi um gasto bastante necessario",
    number: 12321,
    receiptDate: "",
    value: "133",
  },
];

export const mockExpenses = [
  {
    id: "awd1",
    accrualMonth: "",
    category: "Categoria",
    corporationName: "Empresa 1",
    name: "Despesa 1",
    payday: "",
    value: "1200",
  },
  {
    id: "awd2",
    accrualMonth: "",
    category: "Categoria 2",
    corporationName: "Empresa 2",
    name: "Despesa 2",
    payday: "",
    value: "1750",
  },
  {
    id: "awd3",
    accrualMonth: "",
    category: "Categoria 3",
    corporationName: "Empresa 3",
    name: "Despesa 3",
    payday: "",
    value: "2300",
  },
  {
    id: "awd4",
    accrualMonth: "",
    category: "Categoria 4",
    corporationName: "Empresa 6",
    name: "Despesa 4",
    payday: "",
    value: "3100",
  },
];

export default function IndexPage() {
  return (
    <div>
      <AppScheme>
        <h2>HISTÓRICO</h2>

        <HistoryProvider>
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
        </HistoryProvider>
      </AppScheme>
    </div>
  );
}
