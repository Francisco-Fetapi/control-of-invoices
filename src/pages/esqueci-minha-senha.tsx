import AppSchemeSimple from "layouts/AppSchemeSimple";
import PageCentered from "components/Centered";
import { ForgotMyPasswordForm } from "components/forms/ForgotMyPasswordForm";

export default function IndexPage() {
  return (
    <div>
      <AppSchemeSimple>
        <PageCentered>
          <ForgotMyPasswordForm />
        </PageCentered>
      </AppSchemeSimple>
    </div>
  );
}
