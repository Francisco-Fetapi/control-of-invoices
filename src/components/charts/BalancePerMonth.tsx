import { Bar, Doughnut } from "react-chartjs-2";
import "lib/chart";
import useHistoryItems from "hooks/useHistoryItems";

import { useMantineTheme, Select, Text, Box, Center } from "@mantine/core";
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

  const form = useForm({
    initialValues: {
      year: undefined,
      month: "",
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
            data={Object.keys(allBalancesPerMonth || {})}
            {...form.getInputProps("month")}
            sx={{
              width: "120px",
            }}
          />
        </TitleAndAction>
      </TitleAndAction>

      {!balances && (
        <Text color="red">
          Nehuma transação encontrada na data selecionada.
        </Text>
      )}

      {balances && (
        <Center
          sx={{
            maxWidth: 500,
            margin: "50px auto",
          }}
        >
          <Doughnut
            data={{
              labels: ["Despesas", "Receitas", "Total"],
              datasets: [
                {
                  label: `Balanço (Receitas - Despesas) (${selectedYear})`,
                  data: balances,
                  borderColor: theme.colors.gray[3],
                  backgroundColor: [
                    "rgb(255, 99, 132)",
                    "rgb(54, 162, 235)",
                    "rgb(255, 205, 86)",
                  ],
                },
              ],
            }}
            width="60%"
            height="40%"
          />
        </Center>
      )}
    </div>
  );
}
