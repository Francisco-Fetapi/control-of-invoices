import { Bar } from "react-chartjs-2";
import "lib/chart";
import useHistoryItems from "hooks/useHistoryItems";
import getInvoicesPerMonth from "helpers/getTransactionsPerMonth";
import { useMantineTheme, Select, Text } from "@mantine/core";
import { useForm } from "@mantine/form";
import { TitleAndButtonActionContainer } from "styles/components/TitleAndButtonAction";
import getInvoicesYear from "helpers/getTransactionsPerYear";
import getYearOfLastTransaction from "helpers/getYearOfLastTransaction";

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
  const invoicesPerMonth = getInvoicesPerMonth({
    transactions,
    year: year || defaultYear,
  });

  if (invoicesIsLoading) {
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
          defaultValue={defaultYear}
        />
      </TitleAndButtonActionContainer>

      <Bar
        data={{
          labels: Object.keys(invoicesPerMonth || {}),
          datasets: [
            {
              label: `Notas Fiscais (${year})`,
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
