import FormAddInvoices from "components/forms/FormAddInvoices";
import AppScheme from "layouts/AppScheme";

export default function IndexPage() {
  return (
    <div>
      <AppScheme>
        <h2>Lançar Nota Fiscal</h2>

        <FormAddInvoices />
      </AppScheme>
    </div>
  );
}
