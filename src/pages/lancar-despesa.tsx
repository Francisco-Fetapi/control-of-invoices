import AppScheme from "layouts/AppScheme";
import FormAddExpense from "../components/forms/FormAddExpense";

export default function IndexPage() {
  return (
    <div>
      <AppScheme>
        <h2>Lançar Despesa</h2>

        <FormAddExpense />
      </AppScheme>
    </div>
  );
}
