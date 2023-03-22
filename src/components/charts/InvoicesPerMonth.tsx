import { Bar } from "react-chartjs-2";
import "lib/chart";
import useHistoryItems from "hooks/useHistoryItems";
import getInvoicesPerMonth from "helpers/getTransactionsPerMonth";
import { useMantineTheme, Select, Text } from "@mantine/core";
import { useForm } from "@mantine/form";
import { TitleAndButtonActionContainer } from "styles/components/TitleAndButtonAction";
import getInvoicesYear from "helpers/getTransactionsPerYear";

export default function InvoicesPerMonth() {
  const { invoices, invoicesIsLoading } = useHistoryItems();

  const theme = useMantineTheme();
  const form = useForm({
    initialValues: {
      year: "2020",
    },
  });
  const { year } = form.values;
  const invoicesPerMonth = getInvoicesPerMonth({ invoices, year });
  const availableYears = getInvoicesYear({ invoices });

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
