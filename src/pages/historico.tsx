import { Invoice, InvoicesTable } from "components/InvoicesTable";
import AppScheme from "layouts/AppScheme";

const mockInvoices: Invoice[] = [
  {
    id: "o1",
    accrualMonth: new Date(),
    corporationName: "Empresa 1",
    description: "Foi um gasto bastante necessario",
    number: 12321,
    receiptDate: new Date(),
    value: "20",
  },
  {
    id: "o2",
    accrualMonth: new Date(),
    corporationName: "Empresa 2",
    description: "Foi um gasto bastante necessario",
    number: 12321,
    receiptDate: new Date(),
    value: "30",
  },
  {
    id: "o3",
    accrualMonth: new Date(),
    corporationName: "Empresa 3",
    description: "Foi um gasto bastante necessario",
    number: 12321,
    receiptDate: new Date(),
    value: "50",
  },
  {
    id: "o4",
    accrualMonth: new Date(),
    corporationName: "Empresa 4",
    description: "Foi um gasto bastante necessario",
    number: 12321,
    receiptDate: new Date(),
    value: "133",
  },
];

// TODO: implementar um TAB para alternar entre as 2 tabelas.
export default function IndexPage() {
  return (
    <div>
      <AppScheme>
        <h2>Historico</h2>

        <h4>Tabela de Notas Fiscais Lancadas</h4>

        <InvoicesTable data={mockInvoices} />

        <h4>Tabela de Despesas Lancadas</h4>
      </AppScheme>
    </div>
  );
}
