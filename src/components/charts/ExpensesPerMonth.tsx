import { Bar } from "react-chartjs-2";
import "lib/chart";
import useHistoryItems from "hooks/useHistoryItems";
import getExpensesPerMonth from "helpers/getTransactionsPerMonth";
import { useMantineTheme, Select, Text } from "@mantine/core";
import { useForm } from "@mantine/form";
import { TitleAndButtonActionContainer } from "styles/components/TitleAndButtonAction";
import getExpensesYear from "helpers/getTransactionsPerYear";
import getYearOfLastTransaction from "helpers/getYearOfLastTransaction";

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
  const defaultyear = availableYears ? availableYears.at(-1) : "";
  const ExpensesPerMonth = getExpensesPerMonth({
    transactions,
    year: year || defaultyear,
  });

  if (expensesIsLoading) {
    // loading
    return <div />;
  }

  return (
    <div>
      <TitleAndButtonActionContainer>
        <h2>Notas Fiscais</h2>
        <Select
          label="Ano"
          data={availableYears}
          {...form.getInputProps("year")}
          defaultValue={defaultyear}
        />
      </TitleAndButtonActionContainer>

      <Bar
        data={{
          labels: Object.keys(ExpensesPerMonth || {}),
          datasets: [
            {
              label: `Notas Fiscais (${year})`,
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
