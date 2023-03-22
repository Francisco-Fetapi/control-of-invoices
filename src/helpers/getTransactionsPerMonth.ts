import { InvoiceDoc } from "services/getInvoices";
import { getMonthName } from "./getMonthName";

interface Props {
  invoices?: InvoiceDoc[];
  year: string;
}

export default function getInvoicesPerMonth({ year, invoices }: Props) {
  if (!invoices) return;
  let filteredInvoices = invoices.filter((invoice) => {
    const date = new Date(invoice.accrualMonth);
    return date.getFullYear() === +year;
  });

  let mappedInvoices = filteredInvoices.map((invoice) => {
    return {
      ...invoice,
      value: +invoice.value,
      accrualMonth: new Date(invoice.accrualMonth),
    };
  });

  let invoicesPerMonth: Record<string, number> = {};

  mappedInvoices.forEach((invoice) => {
    const month = getMonthName(invoice.accrualMonth);
    const currentValue = invoicesPerMonth[month] || 0;
    invoicesPerMonth[month] = currentValue + invoice.value;
  });

  return invoicesPerMonth;
}
