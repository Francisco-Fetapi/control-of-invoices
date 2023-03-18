import AppScheme from "layouts/AppScheme";
import { CostumersTable } from "../components/tables/CostumersTable";
import { Button, Center } from "@mantine/core";
import Link from "next/link";
import TitleAndButtonAction from "components/TitleAndButtonAction";

export interface Costumer {
  id: string;
  name: string;
  companyname: string;
  cnpj: string;
}

// TODO: On details show more information related to this costumer such as expense and invoices.

export const mockConstumers: Costumer[] = [
  {
    cnpj: "12-12",
    id: "iddofirebase1",
    name: "Kwanza 1",
    companyname: "Nome unico",
  },
  {
    cnpj: "132",
    id: "iddofirebase2",
    name: "Corporation 2",
    companyname: "Nome unico 2",
  },
  {
    cnpj: "132",
    id: "iddofirebase3",
    name: "BFA Bank 3",
    companyname: "Nome unico 3",
  },
];

export default function IndexPage() {
  return (
    <div>
      <AppScheme>
        <TitleAndButtonAction
          title="Empresas Parceiras"
          href="/adicionar-empresas-parceiras"
        />

        <CostumersTable data={mockConstumers} />
      </AppScheme>
    </div>
  );
}
