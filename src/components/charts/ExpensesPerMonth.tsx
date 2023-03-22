import { Bar } from "react-chartjs-2";
import "lib/chart";
import useHistoryItems from "hooks/useHistoryItems";
import getExpensesPerMonth from "helpers/getTransactionsPerMonth";
import { useMantineTheme, Select, Text } from "@mantine/core";
import { useForm } from "@mantine/form";
import { TitleAndButtonActionContainer } from "styles/components/TitleAndButtonAction";
import getExpensesYear from "helpers/getTransactionsPerYear";
import getYearOfLastTransaction from "helpers/getYearOfLastTransaction";
import { TitleAndAction } from "styles/components/TitleAndAction";

export default function ExpensesPerMonth() {
  const { expenses, expensesIsLoading } = useHistoryItems();

  const theme = useMantineTheme();
  const transactions = expenses;
  const form = useForm({
    initialValues: {
      year: undefined,
    },
  });
  const { year } = form.values;

  const availableYears = getExpensesYear({ transactions });
  const defaultYear = availableYears ? availableYears.at(-1) : "";
  const selectedYear = year || defaultYear;
  const ExpensesPerMonth = getExpensesPerMonth({
    transactions,
    year: year || defaultYear,
  });

  if (expensesIsLoading) {
    // loading
    return <div />;
  }

  return (
    <div>
      <TitleAndAction>
        <h2>Despesas</h2>
        <Select
          // label="Ano"
          data={availableYears}
          {...form.getInputProps("year")}
          defaultValue={defaultYear}
          sx={{
            width: "90px",
          }}
        />
      </TitleAndAction>

      <Bar
        data={{
          labels: Object.keys(ExpensesPerMonth || {}),
          datasets: [
            {
              label: `Despesas (${selectedYear})`,
              data: Object.values(ExpensesPerMonth || {}),
              backgroundColor: theme.colors.blue[6],
              borderColor: theme.colors.gray[3],
              //   borderWidth: 50,
            },
          ],
        }}
      />
    </div>
  );
}
