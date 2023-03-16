import AppSchemeSimple from "layouts/AppSchemeSimple";
import PageCentered from "components/Centered";
import { ConfirmEmailForm } from "components/forms/ConfirmEmailForm";

export default function IndexPage() {
  return (
    <div>
      <AppSchemeSimple>
        <PageCentered>
          <ConfirmEmailForm />
        </PageCentered>
      </AppSchemeSimple>
    </div>
  );
}
