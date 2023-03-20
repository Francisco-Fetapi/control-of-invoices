import FormAddCategory from "components/forms/FormAddCategory";
import AppScheme from "layouts/AppScheme";

export default function IndexPage() {
  return (
    <div>
      <AppScheme>
        <h2>Categoria das Despesas</h2>

        <FormAddCategory />
      </AppScheme>
    </div>
  );
}
