import AppScheme from "layouts/AppScheme";
import { CostumersTable } from "../components/CostumersTable";
import { Button, Center } from "@mantine/core";
import { IconPlus } from "@tabler/icons";

export interface Costumer {
  id: string;
  name: string;
  companyname: string;
  cnpj: string;
}

// TODO: no menu DETALHES exibir as operacoes realizadas vinculadas a essa empresa.

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
        <h2>Empresas Parceiras</h2>

        <CostumersTable data={mockConstumers} />

        <Center mt={30}>
          <Button leftIcon={<IconPlus size="1rem" />}>Adicionar Empresa</Button>
        </Center>
      </AppScheme>
    </div>
  );
}
