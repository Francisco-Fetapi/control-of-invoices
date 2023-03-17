import { useState } from "react";
import { AppShell, useMantineTheme } from "@mantine/core";
import Footer from "components/Footer";
import NavBar from "components/NavBar";
import Aside from "components/Aside";
import Header from "components/Header";
import { useRouter } from "next/router";
import { IconHome, IconHistory, IconSettings, TablerIcon } from "@tabler/icons";
import { NavbarNested } from "components/NavBarWithNestedLinks";

interface AppSchemeProps {
  children: React.ReactNode;
}
interface Link {
  label: string;
  link?: string;
}
export interface LinkMenu extends Link {
  links?: Required<Link[]>;
  icon: TablerIcon;
  initiallyOpened?: boolean;
}

const linksMenu: LinkMenu[] = [
  { label: "Página Inicial", icon: IconHome, link: "/" },
  { label: "Histórico", icon: IconHistory, link: "/historico" },
  {
    label: "Preferências",
    icon: IconSettings,
    links: [
      { label: "Empresas Parceiras", link: "/empresas-parceiras" },
      { label: "Categoria de Despesas", link: "/categoria-despesas" },
      { label: "Configurações", link: "/configuracoes" },
    ],
  },
];

export default function AppScheme({ children }: AppSchemeProps) {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="md"
      asideOffsetBreakpoint="md"
      navbar={<NavbarNested opened={opened} links={linksMenu} />}
      // navbar={<NavBar opened={opened} />}
      aside={<Aside />}
      footer={<Footer />}
      header={<Header opened={opened} setOpened={setOpened} />}
    >
      {children}
    </AppShell>
  );
}
