import { Bar } from "react-chartjs-2";
import "lib/chart";
import useHistoryItems from "hooks/useHistoryItems";
import getInvoicesPerMonth from "helpers/getTransactionsPerMonth";
import { useMantineTheme, Select, Text } from "@mantine/core";
import { useForm } from "@mantine/form";
import getInvoicesYear from "helpers/getTransactionsPerYear";
import { TitleAndAction } from "styles/components/TitleAndAction";

export default function InvoicesPerMonth() {
  const { invoices, invoicesIsLoading } = useHistoryItems();

  const theme = useMantineTheme();

  const transactions = invoices;
  const form = useForm({
    initialValues: {
      year: undefined,
    },
  });
  const { year } = form.values;

  const availableYears = getInvoicesYear({ transactions });
  const defaultYear = availableYears ? availableYears.at(-1) : "";
  const selectedYear = year || defaultYear;
  const invoicesPerMonth = getInvoicesPerMonth({
    transactions,
    year: selectedYear,
  });

  if (invoicesIsLoading) {
    // loading
    return <div />;
  }

  return (
    <div>
      <TitleAndAction>
        <h2>Notas Fiscais</h2>
        <Select
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
          labels: Object.keys(invoicesPerMonth || {}),
          datasets: [
            {
              label: `Notas Fiscais (${selectedYear})`,
              data: Object.values(invoicesPerMonth || {}),
              backgroundColor: theme.colors.blue[6],
              borderColor: theme.colors.gray[3],
              //   borderWidth: 50,
            },
          ],
        }}
        options={{
          indexAxis: "y",
        }}
      />
    </div>
  );
}
