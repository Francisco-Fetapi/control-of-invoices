import FormSettings from "components/forms/FormSettings";
import AppScheme from "layouts/AppScheme";

export default function IndexPage() {
  return (
    <div>
      <AppScheme>
        <h2>Configurações</h2>

        <FormSettings />
      </AppScheme>
    </div>
  );
}
