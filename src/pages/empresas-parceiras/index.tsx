import AppScheme from "layouts/AppScheme";
import { CostumersTable } from "../../components/tables/CostumersTable";
import TitleAndButtonAction from "components/TitleAndButtonAction";

export interface Costumer {
  id: string;
  name: string;
  companyname: string;
  cnpj: string;
}

export default function IndexPage() {
  return (
    <div>
      <AppScheme>
        <TitleAndButtonAction
          title="Empresas Parceiras"
          href="/empresas-parceiras/adicionar"
        />

        <CostumersTable />
      </AppScheme>
    </div>
  );
}
