import { Bar } from "react-chartjs-2";
import "lib/chart";
import useHistoryItems from "hooks/useHistoryItems";
import getInvoicesPerMonth from "helpers/getInvoicesPerMonth";

interface InvoicesPerMonthProps {
  year: string;
}

export default function InvoicesPerMonth({ year }: InvoicesPerMonthProps) {
  const { invoices, invoicesIsLoading } = useHistoryItems();
  const invoicesPerMonth = getInvoicesPerMonth({ invoices, year });

  if (invoicesIsLoading) {
    // loading
    return <div />;
  }

  const data = {
    labels: Object.keys(invoicesPerMonth || {}),
    datasets: [
      {
        label: `Notas Fiscais (${year})`,
        data: Object.values(invoicesPerMonth || {}),
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.2)",
      },
    ],
  };

  return (
    <div>
      <h2>Notas Fiscais</h2>
      <Bar
        data={data}
        options={{
          indexAxis: "y",
        }}
      />
    </div>
  );
}
