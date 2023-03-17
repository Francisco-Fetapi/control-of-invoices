import FormCategory from "components/forms/FormCategory";
import AppScheme from "layouts/AppScheme";

export default function IndexPage() {
  return (
    <div>
      <AppScheme>
        <h2>Categoria das Despesas</h2>

        <FormCategory />
      </AppScheme>
    </div>
  );
}
