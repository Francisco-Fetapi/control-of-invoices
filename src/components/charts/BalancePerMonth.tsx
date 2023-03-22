import { Bar, Doughnut } from "react-chartjs-2";
import "lib/chart";
import useHistoryItems from "hooks/useHistoryItems";

import { useMantineTheme, Select, Text, Box } from "@mantine/core";
import { useForm } from "@mantine/form";
import getBalancePerMonth from "helpers/getBalancePerMonth";
import { TitleAndAction } from "styles/components/TitleAndAction";
import { Transaction } from "entities/Transaction";
import getTransactionsPerYear from "helpers/getTransactionsPerYear";
import { getMonths } from "helpers/getMonths";

export default function BalancePerMonth() {
  const { expensesIsLoading, invoicesIsLoading, expenses, invoices } =
    useHistoryItems();

  const theme = useMantineTheme();
  const months = getMonths();

  console.log("months", months);

  const form = useForm({
    initialValues: {
      year: undefined,
      month: months[0],
    },
  });
  const { year } = form.values;

  if (!expenses || !invoices) {
    // loading
    return <div />;
  }

  const transactions: Transaction[] = [...expenses, ...invoices];

  const availableYears = getTransactionsPerYear({ transactions });
  const defaultYear = availableYears ? availableYears.at(-1) : "";
  const selectedYear = year || defaultYear;
  const allBalancesPerMonth = getBalancePerMonth({
    expenses,
    invoices,
    year: selectedYear,
  });

  const balances = allBalancesPerMonth
    ? allBalancesPerMonth[form.values.month]
    : undefined;

  return (
    <div>
      <TitleAndAction>
        <h2>Balanço (Receitas - Despesas)</h2>
        <TitleAndAction>
          <Select
            data={availableYears}
            {...form.getInputProps("year")}
            defaultValue={defaultYear}
            sx={{
              width: "90px",
            }}
          />
          <Select
            data={months}
            {...form.getInputProps("month")}
            sx={{
              width: "120px",
            }}
          />
        </TitleAndAction>
      </TitleAndAction>

      {!balances && <Text>Nehum dado encontrado na Data selecionada</Text>}

      {balances && (
        <Doughnut
          data={{
            labels: ["Despesas", "Receitas", "Total"],
            datasets: [
              {
                label: `Balanço (Receitas - Despesas) (${selectedYear})`,
                data: balances,
                // backgroundColor: theme.colors.blue[6],
                borderColor: theme.colors.gray[3],
                backgroundColor: [
                  "rgb(255, 99, 132)",
                  "rgb(54, 162, 235)",
                  "rgb(255, 205, 86)",
                ],
              },
            ],
          }}
        />
      )}
    </div>
  );
}
