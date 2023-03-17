import FormLaunchInvoice from "components/forms/FormLaunchInvoice";
import AppScheme from "layouts/AppScheme";

export default function IndexPage() {
  return (
    <div>
      <AppScheme>
        <h2>Lançar Nota Fiscal</h2>

        <FormLaunchInvoice />
      </AppScheme>
    </div>
  );
}
