import AppSchemeSimple from "layouts/AppSchemeSimple";
import PageCentered from "components/Centered";
import { SignInForm } from "components/forms/SignInForm";

export default function IndexPage() {
  return (
    <div>
      <AppSchemeSimple>
        <PageCentered>
          <SignInForm />
        </PageCentered>
      </AppSchemeSimple>
    </div>
  );
}
