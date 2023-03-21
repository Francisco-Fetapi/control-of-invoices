import { useState } from "react";
import { AppShell, useMantineTheme } from "@mantine/core";
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

  const isTablet = useMediaQuery("(max-width:1030px)");

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
      navbar={
        isTablet ? undefined : (
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
