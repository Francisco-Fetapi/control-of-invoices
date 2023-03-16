import AppSchemeSimple from "layouts/AppSchemeSimple";
import PageCentered from "components/Centered";
import { SignUpForm } from "components/forms/SignUpForm";

export default function IndexPage() {
  return (
    <div>
      <AppSchemeSimple>
        <PageCentered>
          <SignUpForm />
        </PageCentered>
      </AppSchemeSimple>
    </div>
  );
}
