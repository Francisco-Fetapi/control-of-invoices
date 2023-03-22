import { InvoiceDoc } from "services/getInvoices";

interface Props {
  invoices?: InvoiceDoc[];
}

export default function getInvoicesYear({ invoices }: Props) {
  if (!invoices) return;
  const years = new Set<string>();

  invoices.forEach((invoice) => {
    const date = new Date(invoice.accrualMonth);
    const year = date.getFullYear();
    years.add(year.toString());
  });

  return Array.from(years);
}
