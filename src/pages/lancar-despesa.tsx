import FormLaunchExpense from "components/forms/FormLaunchExpense";
import AppScheme from "layouts/AppScheme";

export default function IndexPage() {
  return (
    <div>
      <AppScheme>
        <h2>Lançar Despesa</h2>

        <FormLaunchExpense />
      </AppScheme>
    </div>
  );
}
