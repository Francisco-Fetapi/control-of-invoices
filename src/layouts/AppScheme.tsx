import { useState } from "react";
import { AppShell, MediaQuery, useMantineTheme } from "@mantine/core";
import Footer from "components/Footer";
import Header from "components/Header";
import { useRouter } from "next/router";
import { IconHome, IconHistory, IconSettings, TablerIcon } from "@tabler/icons";
import { NavbarNested } from "components/NavBarWithNestedLinks";
import { useMediaQuery } from "@mantine/hooks";

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

export default function AppScheme({ children }: AppSchemeProps) {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const router = useRouter();
  const initiallyOpened = [
    "/empresas-parceiras",
    "/configuracoes",
    "/despesas/categorias",
  ].includes(router.pathname);

  // TODO: you can configure different value when the page has a table and when it has a form.
  // if pathname has 'lancar' or 'adicionar' then has a form.
  const isOnTablet = useMediaQuery("(max-width:1030px)", true);

  const linksMenu: LinkMenu[] = [
    { label: "Página Inicial", icon: IconHome, link: "/" },
    { label: "Histórico", icon: IconHistory, link: "/historico" },
    {
      label: "Preferências",
      icon: IconSettings,
      initiallyOpened,
      links: [
        { label: "Empresas Parceiras", link: "/empresas-parceiras" },
        { label: "Categoria de Despesas", link: "/despesas/categorias" },
        { label: "Configurações", link: "/configuracoes" },
      ],
    },
  ];

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
      // navbar={<NavbarNested opened={opened} links={linksMenu} />}
      navbar={
        isOnTablet ? (
          <div />
        ) : (
          <NavbarNested opened={opened} links={linksMenu} />
        )
      }
      footer={<Footer />}
      header={<Header opened={opened} setOpened={setOpened} />}
    >
      {children}
    </AppShell>
  );
}
