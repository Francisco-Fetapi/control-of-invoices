import { Bar } from "react-chartjs-2";
import "lib/chart";

const data = {
  labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho"],
  datasets: [
    {
      label: "Vendas",
      data: [12, 19, 3, 5, 2, 3, 7],
      fill: false,
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgba(255, 99, 132, 0.2)",
    },
  ],
};

const options = {
  indexAxis: "y",
};

export default function InvoicesPerMonth() {
  return (
    <div>
      <h2>Vendas por mês</h2>
      <Bar data={data} />
    </div>
  );
}
