import InvoicesPerMonth from "components/charts/InvoicesPerMonth";
import LimitRecipes from "components/charts/LimitRecipes";
import HistoryProvider from "context/HistoryProvider";
import AppScheme from "layouts/AppScheme";
import { Stack } from "@mantine/core";
import ExpensesPerMonth from "components/charts/ExpensesPerMonth";
import BalancePerMonth from "components/charts/BalancePerMonth";

export default function IndexPage() {
  return (
    <div>
      <AppScheme>
        <HistoryProvider>
          <Stack
            sx={{
              maxWidth: 600,
            }}
          >
            <LimitRecipes />

            <InvoicesPerMonth />

            <ExpensesPerMonth />

            <BalancePerMonth />
          </Stack>

          <h2>Visualização Rápida</h2>
          <ul>
            <li>
              gráficos com balanço simples, mostrando receitas - despesas mês a
              mês
            </li>
            <li>gráficos com as despesas por categorias</li>
          </ul>

          <br />
        </HistoryProvider>
      </AppScheme>
    </div>
  );
}
