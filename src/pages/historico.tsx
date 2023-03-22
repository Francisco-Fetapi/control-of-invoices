import { ExpensesTable } from "components/tables/ExpensesTable";
import { InvoicesTable } from "components/tables/InvoicesTable";
import AppScheme from "layouts/AppScheme";
import { Tabs } from "@mantine/core";
import TitleAndButtonAction from "components/TitleAndButtonAction";
import HistoryProvider from "context/HistoryProvider";

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
              <InvoicesTable />
            </Tabs.Panel>
            <Tabs.Panel value="expense">
              <TitleAndButtonAction
                title="Despesas Lançadas"
                href="/despesas/lancar"
              />

              <ExpensesTable />
            </Tabs.Panel>
          </Tabs>
        </HistoryProvider>
      </AppScheme>
    </div>
  );
}
