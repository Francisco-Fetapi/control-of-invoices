import AppSchemeSimple from "layouts/AppSchemeSimple";
import PageCentered from "components/Centered";
import { SignUpFormMoreInfo } from "components/forms/SignUpFormMoreInfo";

export default function IndexPage() {
  return (
    <div>
      <AppSchemeSimple>
        <PageCentered>
          <SignUpFormMoreInfo />
        </PageCentered>
      </AppSchemeSimple>
    </div>
  );
}
